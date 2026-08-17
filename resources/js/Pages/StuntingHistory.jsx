import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { useState, useCallback, useMemo, useEffect } from 'react';

export default function StuntingHistory({ auth, history, records = { data: [] }, stats = {}, filters = {} }) {
    // Normalisasi records dari prop history atau records
    const recordsData = records?.data ? records : (history?.data ? history : { data: [] });

    // Modern Medical Palette - Soft, Clean, Professional
    const colors = {
        primary: '#0D9488',      // Teal 600
        primaryLight: '#14B8A6', // Teal 500
        primaryDark: '#0F766E',  // Teal 700
        secondary: '#059669',    // Emerald 600
        accent: '#D97706',       // Amber 600
        danger: '#DC2626',       // Red 600
        info: '#2563EB',         // Blue 600
        purple: '#7C3AED',       // Violet 600
        surface: '#F8FAFC',
        elevated: '#FFFFFF',
        text: '#1E293B',
        muted: '#64748B',
    };

    const [search, setSearch] = useState(filters?.search ?? '');
    const [statusFilter, setStatusFilter] = useState(filters?.status ?? 'all');
    const [expandedId, setExpandedId] = useState(null);
    const [deletingId, setDeletingId] = useState(null);
    const [confirmDelete, setConfirmDelete] = useState(null);
    const [activeChart, setActiveChart] = useState('weight'); // weight, height, lila, hb
    const [isVisible, setIsVisible] = useState(false);

    // Intersection observer for animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.1 }
        );
        const el = document.getElementById('stats-section');
        if (el) observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const applyFilters = useCallback((s, f) => {
        router.get(route('stunting.history'), {
            search: s || undefined,
            status: f !== 'all' ? f : undefined,
        }, { preserveState: true, replace: true });
    }, []);

    const handleSearch = useCallback((e) => {
        const val = e.target.value;
        setSearch(val);
        clearTimeout(window._st);
        window._st = setTimeout(() => applyFilters(val, statusFilter), 400);
    }, [statusFilter, applyFilters]);

    const handleStatusFilter = useCallback((s) => {
        setStatusFilter(s);
        applyFilters(search, s);
    }, [search, applyFilters]);

    const confirmDoDelete = useCallback(() => {
        if (!confirmDelete) return;
        setDeletingId(confirmDelete.id);
        router.delete(route('stunting.destroy', confirmDelete.id), {
            onFinish: () => { setDeletingId(null); setConfirmDelete(null); },
        });
    }, [confirmDelete]);

    const isHealthy = (r) => {
        const status = (r.status || r.stunting_status || '').toLowerCase();
        return status === 'normal' || status === 'sehat';
    };

    const getOverallStatus = (r) => {
        const st = (r.status || r.stunting_status || '').toLowerCase();
        if (st === 'normal' || isHealthy(r)) return { label: 'Normal', bg: 'bg-emerald-100', text: 'text-emerald-800', dot: 'bg-emerald-500', border: 'border-emerald-200' };
        if (st === 'severe' || st === 'gizi buruk') return { label: 'Gizi Buruk', bg: 'bg-red-100', text: 'text-red-800', dot: 'bg-red-500', border: 'border-red-200' };
        if (st === 'stunting' || st === 'stunted') return { label: 'Stunting', bg: 'bg-red-100', text: 'text-red-800', dot: 'bg-red-500', border: 'border-red-200' };
        if (st === 'risk' || st === 'berisiko') return { label: 'Berisiko', bg: 'bg-amber-100', text: 'text-amber-800', dot: 'bg-amber-500', border: 'border-amber-200' };
        return { label: r.status || 'Perlu Perhatian', bg: 'bg-amber-100', text: 'text-amber-800', dot: 'bg-amber-500', border: 'border-amber-200' };
    };

    const formatDate = (d) => d ? new Date(d).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : '-';
    const formatDateShort = (d) => d ? new Date(d).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' }) : '-';
    const ageDisplay = (m) => {
        if (!m && m !== 0) return '-';
        if (m < 12) return `${m} bln`;
        const y = Math.floor(m / 12), r = m % 12;
        return r > 0 ? `${y} thn ${r} bln` : `${y} thn`;
    };

    const getBadgeClass = (s) => {
        const val = (s || '').toLowerCase();
        if (val === 'normal') return 'bg-emerald-100 text-emerald-800 border-emerald-200';
        if (['severe', 'stunting', 'wasting', 'gizi buruk'].includes(val)) return 'bg-red-100 text-red-800 border-red-200';
        return 'bg-amber-100 text-amber-800 border-amber-200';
    };

    const statusLabels = {
        stunting: { normal: 'Normal', risk: 'Berisiko', stunting: 'Stunting' },
        wasting:  { normal: 'Normal', wasting: 'Gizi Kurang' },
        anemia:   { normal: 'Normal', mild: 'Anemia Ringan', severe: 'Anemia Berat' },
        lila:     { normal: 'Normal', moderate: 'Gizi Kurang', severe: 'Gizi Buruk' },
    };

    const filterButtons = [
        { key: 'all',      label: 'Semua',           icon: '📋' },
        { key: 'healthy',  label: 'Normal',          icon: '✅' },
        { key: 'risk',     label: 'Perlu Perhatian', icon: '⚠️' },
        { key: 'stunting', label: 'Stunting',        icon: '🔴' },
    ];

    const { flash } = usePage().props;

    // ===== CHART DATA PREPARATION =====
    const chartData = useMemo(() => {
        if (!recordsData?.data || recordsData.data.length === 0) return [];
        const sorted = [...recordsData.data].sort((a, b) => 
            new Date(a.tanggal_pemeriksaan || a.created_at) - new Date(b.tanggal_pemeriksaan || b.created_at)
        );
        return sorted.map(r => ({
            date: formatDateShort(r.tanggal_pemeriksaan || r.created_at),
            fullDate: r.tanggal_pemeriksaan || r.created_at,
            weight: parseFloat(r.berat_badan || r.weight) || 0,
            height: parseFloat(r.tinggi_badan || r.height) || 0,
            lila: parseFloat(r.lingkar_lengan || r.lila) || 0,
            hb: parseFloat(r.hemoglobin || r.hb) || 0,
            name: r.nama_anak || r.child_name,
            age: r.umur_bulan || r.age_months,
        }));
    }, [recordsData]);

    // Chart config
    const chartConfig = {
        weight: { label: 'Berat Badan (kg)', color: '#0D9488', fill: 'rgba(13,148,136,0.1)', icon: '⚖️' },
        height: { label: 'Tinggi Badan (cm)', color: '#2563EB', fill: 'rgba(37,99,235,0.1)', icon: '📏' },
        lila:   { label: 'LiLA (cm)', color: '#D97706', fill: 'rgba(217,119,6,0.1)', icon: '💪' },
        hb:     { label: 'Hemoglobin (g/dL)', color: '#DC2626', fill: 'rgba(220,38,38,0.1)', icon: '🩸' },
    };

    // ===== INSIGHT / KESIMPULAN LOGIC =====
    const latestInsight = useMemo(() => {
        if (!recordsData?.data || recordsData.data.length === 0) return null;
        const latest = recordsData.data[0];
        const prev = recordsData.data[1] || null;

        const status = getOverallStatus(latest);
        const insights = [];

        const curWeight = parseFloat(latest.berat_badan || latest.weight) || 0;
        const prevWeight = prev ? (parseFloat(prev.berat_badan || prev.weight) || 0) : 0;
        const curHeight = parseFloat(latest.tinggi_badan || latest.height) || 0;
        const prevHeight = prev ? (parseFloat(prev.tinggi_badan || prev.height) || 0) : 0;
        const curHb = parseFloat(latest.hemoglobin || latest.hb) || 0;
        const prevHb = prev ? (parseFloat(prev.hemoglobin || prev.hb) || 0) : 0;

        if (prev && curWeight && prevWeight) {
            const diff = (curWeight - prevWeight).toFixed(1);
            if (diff > 0) insights.push({ type: 'positive', text: `Berat badan naik ${diff} kg dari pemeriksaan sebelumnya.` });
            else if (diff < 0) insights.push({ type: 'warning', text: `Berat badan turun ${Math.abs(diff)} kg dari pemeriksaan sebelumnya.` });
        }

        if (prev && curHeight > prevHeight) {
            const diff = (curHeight - prevHeight).toFixed(1);
            insights.push({ type: 'positive', text: `Tinggi badan bertambah ${diff} cm.` });
        }

        if (latest.status === 'Stunting' || latest.stunting_status === 'stunting') {
            insights.push({ type: 'alert', text: `Terdeteksi stunting. Perlu intervensi gizi segera dan konsultasi ke tenaga kesehatan.` });
        } else {
            insights.push({ type: 'positive', text: `Pertumbuhan tinggi badan dalam kategori baik.` });
        }

        return {
            latest,
            status,
            insights,
            prev,
            trend: prev ? {
                weight: curWeight - prevWeight,
                height: curHeight - prevHeight,
                hb: curHb - prevHb,
            } : null
        };
    }, [recordsData]);

    // SVG Chart Component
    const renderChart = () => {
        if (chartData.length === 0) return null;
        const data = chartData;
        const cfg = chartConfig[activeChart];
        const values = data.map(d => d[activeChart]);
        const max = Math.max(...values) * 1.1 || 10;
        const min = Math.min(...values) * 0.9 || 0;
        const range = max - min || 1;

        const width = 600;
        const height = 240;
        const padding = { top: 20, right: 20, bottom: 40, left: 50 };
        const chartW = width - padding.left - padding.right;
        const chartH = height - padding.top - padding.bottom;

        const getX = (i) => padding.left + (i / (data.length - 1 || 1)) * chartW;
        const getY = (v) => padding.top + chartH - ((v - min) / range) * chartH;

        const linePath = data.map((d, i) => {
            const x = getX(i);
            const y = getY(d[activeChart]);
            return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
        }).join(' ');

        const areaPath = `${linePath} L ${getX(data.length - 1)} ${padding.top + chartH} L ${getX(0)} ${padding.top + chartH} Z`;

        const gridLines = [0, 0.25, 0.5, 0.75, 1].map(p => {
            const y = padding.top + chartH * p;
            const val = (max - range * p).toFixed(1);
            return { y, val };
        });

        return (
            <div className="w-full overflow-x-auto">
                <svg viewBox={`0 0 ${width} ${height}`} className="w-full" style={{ minWidth: '400px' }}>
                    {gridLines.map((g, i) => (
                        <g key={i}>
                            <line x1={padding.left} y1={g.y} x2={width - padding.right} y2={g.y} stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
                            <text x={padding.left - 10} y={g.y + 4} textAnchor="end" fontSize="11" fill="#94A3B8">{g.val}</text>
                        </g>
                    ))}
                    <path d={areaPath} fill={cfg.fill} />
                    <path d={linePath} fill="none" stroke={cfg.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    {data.map((d, i) => {
                        const x = getX(i);
                        const y = getY(d[activeChart]);
                        return (
                            <g key={i}>
                                <circle cx={x} cy={y} r="5" fill="white" stroke={cfg.color} strokeWidth="2.5" />
                                <circle cx={x} cy={y} r="2" fill={cfg.color} />
                                <text x={x} y={y - 12} textAnchor="middle" fontSize="11" fontWeight="600" fill={cfg.color}>
                                    {d[activeChart]}
                                </text>
                                <text x={x} y={height - 10} textAnchor="middle" fontSize="10" fill="#64748B">{d.date}</text>
                            </g>
                        );
                    })}
                </svg>
            </div>
        );
    };

    // Status distribution for mini bar chart
    const statusDistribution = useMemo(() => {
        if (!recordsData?.data) return [];
        const dist = { normal: 0, risk: 0, stunting: 0, severe: 0 };
        recordsData.data.forEach(r => {
            if (isHealthy(r)) dist.normal++;
            else if (r.status === 'Stunting' || r.stunting_status === 'stunting') dist.stunting++;
            else if (r.status === 'Berisiko' || r.stunting_status === 'risk') dist.risk++;
            else if (r.severity === 'severe') dist.severe++;
            else dist.risk++;
        });
        const total = recordsData.data.length || 1;
        return [
            { label: 'Normal', count: dist.normal, pct: (dist.normal / total) * 100, color: '#10B981', bg: 'bg-emerald-500' },
            { label: 'Berisiko', count: dist.risk, pct: (dist.risk / total) * 100, color: '#F59E0B', bg: 'bg-amber-500' },
            { label: 'Stunting', count: dist.stunting, pct: (dist.stunting / total) * 100, color: '#EF4444', bg: 'bg-red-500' },
            { label: 'Gizi Buruk', count: dist.severe, pct: (dist.severe / total) * 100, color: '#DC2626', bg: 'bg-red-600' },
        ];
    }, [recordsData]);

    return (
        <AuthenticatedLayout auth={auth} header={null}>
            <Head title="Riwayat Pemeriksaan" />

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
                .sh-root {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    background: #F8FAFC;
                    min-height: 100vh;
                    padding-bottom: 5rem;
                }
                .sh-hero {
                    background: linear-gradient(135deg, #0F766E 0%, #0D9488 40%, #134E4A 100%);
                    position: relative;
                    overflow: hidden;
                }
                .sh-hero-shape {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(80px);
                    opacity: 0.12;
                }
                .medical-card {
                    background: white;
                    border: 1px solid #E2E8F0;
                    border-radius: 20px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .stat-pill {
                    background: rgba(255,255,255,0.12);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255,255,255,0.2);
                    border-radius: 16px;
                    padding: 1rem 1.25rem;
                }
                .record-card {
                    background: white;
                    border-radius: 20px;
                    border: 1px solid #E2E8F0;
                    overflow: hidden;
                    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .detail-panel {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .detail-panel.open {
                    max-height: 1000px;
                }
                .filter-pill {
                    padding: 0.5rem 1.1rem;
                    border-radius: 9999px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    border: 1.5px solid #E2E8F0;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    background: white;
                    color: #64748B;
                }
                .filter-pill.active {
                    background: linear-gradient(135deg, #0D9488, #0F766E);
                    border-color: transparent;
                    color: white;
                    box-shadow: 0 4px 12px rgba(13, 148, 136, 0.25);
                }
                .sh-search {
                    border: 1.5px solid #E2E8F0;
                    border-radius: 14px;
                    padding: 0.75rem 1rem 0.75rem 2.75rem;
                    font-size: 0.9rem;
                    width: 100%;
                    background: white;
                    color: #1E293B;
                }
                .page-btn {
                    width: 2.2rem;
                    height: 2.2rem;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.875rem;
                    font-weight: 600;
                    cursor: pointer;
                    border: none;
                }
                .page-btn.active {
                    background: linear-gradient(135deg, #0D9488, #0F766E);
                    color: white;
                }
                .page-btn:not(.active) {
                    background: #F1F5F9;
                    color: #64748B;
                }
                .chart-tab {
                    padding: 0.5rem 1rem;
                    border-radius: 10px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    cursor: pointer;
                    border: 1.5px solid transparent;
                    color: #64748B;
                    background: transparent;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }
                .chart-tab.active {
                    background: rgba(13, 148, 136, 0.08);
                    color: #0D9488;
                    border-color: rgba(13, 148, 136, 0.2);
                }
                .trend-up { color: #059669; }
                .trend-down { color: #DC2626; }
                .trend-neutral { color: #64748B; }
            `}</style>

            <div className="sh-root">
                {/* Hero */}
                <section className="sh-hero py-12 md:py-16">
                    <div className="sh-hero-shape w-96 h-96 bg-white top-0 right-0 -mr-20 -mt-20" />
                    <div className="sh-hero-shape w-72 h-72 bg-teal-300 bottom-0 left-0 -ml-10 -mb-10" />

                    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                        <Link href={route('stunting.check')}
                            className="inline-flex items-center gap-2 text-teal-100 hover:text-white text-sm font-medium mb-5 transition-colors group">
                            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Kembali ke Form Pemeriksaan
                        </Link>

                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 backdrop-blur-md rounded-full text-white/95 text-xs font-semibold mb-4 border border-white/20">
                                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                                    <span>Data Pribadi — {auth?.user?.name || 'Pengguna'}</span>
                                </div>
                                <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                                    Riwayat <span className="text-teal-200">Pemeriksaan</span>
                                </h1>
                                <p className="text-teal-100/80 mt-3 text-sm md:text-base max-w-lg">
                                    Pantau perkembangan kesehatan anak melalui data pemeriksaan stunting yang terintegrasi.
                                </p>
                            </div>
                            <Link href={route('stunting.check')}
                                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/15 hover:bg-white/25 backdrop-blur-md rounded-2xl text-white font-semibold transition-all text-sm border border-white/20 shadow-lg shadow-teal-900/10 flex-shrink-0">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                Pemeriksaan Baru
                            </Link>
                        </div>

                        {/* Stats */}
                        <div id="stats-section" className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
                            {[
                                { label: 'Total Pemeriksaan', value: stats?.total ?? recordsData.data.length, icon: '📋' },
                                { label: 'Status Normal',     value: stats?.healthy ?? recordsData.data.filter(isHealthy).length, icon: '✅' },
                                { label: 'Perlu Perhatian',   value: stats?.at_risk ?? recordsData.data.filter(r => !isHealthy(r)).length, icon: '⚠️' },
                                { label: 'Stunting',          value: stats?.stunting ?? recordsData.data.filter(r => r.status === 'Stunting' || r.stunting_status === 'stunting').length, icon: '🔴' },
                            ].map((s, i) => (
                                <div key={i} className="stat-pill text-white">
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <span className="text-base">{s.icon}</span>
                                        <span className="text-[11px] font-semibold text-white/70 uppercase tracking-wider">{s.label}</span>
                                    </div>
                                    <div className="text-3xl font-extrabold tracking-tight">
                                        {s.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-20">
                            <path d="M0,60 C300,120 600,0 900,60 C1050,90 1150,40 1200,60 L1200,120 L0,120 Z" fill="#F8FAFC" />
                        </svg>
                    </div>
                </section>

                {/* Content */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-2 relative z-10 space-y-6">
                    {flash?.success && (
                        <div className="mb-4 px-5 py-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 shadow-sm">
                            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span className="text-emerald-800 font-semibold text-sm">{flash.success}</span>
                        </div>
                    )}

                    {/* Insights & Charts */}
                    {latestInsight && (
                        <div className="grid lg:grid-cols-5 gap-5">
                            <div className="lg:col-span-2 medical-card p-6">
                                <div className="flex items-center gap-2 mb-5">
                                    <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Kesimpulan Terakhir</h3>
                                        <p className="text-xs text-gray-500">{formatDate(latestInsight.latest.tanggal_pemeriksaan || latestInsight.latest.created_at)}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 mb-5 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${latestInsight.status.bg} border ${latestInsight.status.border}`}>
                                        {isHealthy(latestInsight.latest) ? '✅' : '⚠️'}
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-medium">Status Gizi</p>
                                        <p className={`font-bold text-sm ${latestInsight.status.text}`}>{latestInsight.status.label}</p>
                                    </div>
                                </div>

                                <div className="space-y-2.5">
                                    {latestInsight.insights.map((insight, i) => (
                                        <div key={i} className={`flex items-start gap-2.5 p-3 rounded-xl text-xs leading-relaxed ${
                                            insight.type === 'positive' ? 'bg-emerald-50 text-emerald-800 border border-emerald-100' :
                                            insight.type === 'warning' ? 'bg-amber-50 text-amber-800 border border-amber-100' :
                                            'bg-red-50 text-red-800 border border-red-100'
                                        }`}>
                                            <span className="font-medium">{insight.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:col-span-3 medical-card p-6">
                                <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg">Tren Pemeriksaan</h3>
                                        <p className="text-xs text-gray-500 mt-0.5">Grafik perkembangan dari waktu ke waktu</p>
                                    </div>
                                    <div className="flex gap-1.5 flex-wrap">
                                        {Object.entries(chartConfig).map(([key, cfg]) => (
                                            <button
                                                key={key}
                                                onClick={() => setActiveChart(key)}
                                                className={`chart-tab ${activeChart === key ? 'active' : ''}`}>
                                                <span>{cfg.icon}</span>
                                                <span className="hidden sm:inline">{cfg.label.split(' ')[0]}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {chartData.length > 1 ? (
                                    renderChart()
                                ) : (
                                    <div className="h-48 flex items-center justify-center text-gray-400 text-sm">
                                        <div className="text-center">
                                            <div className="text-2xl mb-2">📊</div>
                                            <p>Minimal 2 data untuk menampilkan grafik</p>
                                        </div>
                                    </div>
                                )}

                                <div className="mt-6 pt-5 border-t border-gray-100">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Distribusi Status</p>
                                    <div className="space-y-2.5">
                                        {statusDistribution.map((item, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <span className="text-xs text-gray-500 w-20 font-medium flex-shrink-0">{item.label}</span>
                                                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                                    <div 
                                                        className={`h-full rounded-full ${item.bg} transition-all duration-700`}
                                                        style={{ width: `${item.pct}%` }}
                                                    />
                                                </div>
                                                <span className="text-xs font-bold text-gray-700 w-8 text-right">{item.count}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Filter bar */}
                    <div className="medical-card p-4 md:p-5">
                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <div className="relative flex-1 min-w-0 w-full">
                                <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input type="text" placeholder="Cari nama anak..."
                                    value={search} onChange={handleSearch} className="sh-search" />
                            </div>
                            <div className="flex gap-2 flex-wrap">
                                {filterButtons.map(f => (
                                    <button key={f.key}
                                        className={`filter-pill ${statusFilter === f.key ? 'active' : ''}`}
                                        onClick={() => handleStatusFilter(f.key)}>
                                        <span className="mr-1">{f.icon}</span>{f.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Records List */}
                    {recordsData.data.length === 0 ? (
                        <div className="medical-card p-12 text-center">
                            <div className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center text-3xl mb-5 bg-slate-50 border border-slate-100">
                                📋
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Belum ada riwayat pemeriksaan</h3>
                            <p className="text-gray-500 mb-6 text-sm max-w-md mx-auto">
                                Mulai pemeriksaan pertama dan hasilnya akan muncul di sini secara otomatis.
                            </p>
                            <Link href={route('stunting.check')}
                                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-all shadow-lg shadow-teal-500/20"
                                style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark})` }}>
                                + Pemeriksaan Pertama
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {recordsData.data.map((record) => {
                                const status = getOverallStatus(record);
                                const isOpen = expandedId === record.id;
                                const healthy = isHealthy(record);

                                return (
                                    <div key={record.id} className="record-card">
                                        <div className="p-5 md:p-6 flex items-start gap-4">
                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 border ${healthy ? 'bg-emerald-50 border-emerald-100 text-emerald-600' : 'bg-red-50 border-red-100 text-red-500'}`}>
                                                {healthy ? '✅' : '⚠️'}
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start justify-between gap-2 flex-wrap">
                                                    <div>
                                                        <h3 className="font-bold text-gray-900 text-lg leading-tight">
                                                            {record.nama_anak || record.child_name}
                                                        </h3>
                                                        <div className="flex items-center gap-3 mt-1 flex-wrap">
                                                            <span className="text-sm text-gray-500 flex items-center gap-1">
                                                                <span>{(record.jenis_kelamin || record.gender) === 'L' ? '👦' : '👧'}</span>
                                                                {ageDisplay(record.umur_bulan || record.age_months)}
                                                            </span>
                                                            <span className="text-gray-300">·</span>
                                                            <span className="text-sm text-gray-500">
                                                                {formatDate(record.tanggal_pemeriksaan || record.created_at)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <span className={`px-3 py-1.5 rounded-full text-xs font-bold border ${status.bg} ${status.text} ${status.border}`}>
                                                        {status.label}
                                                    </span>
                                                </div>

                                                <div className="flex gap-2 mt-4 flex-wrap">
                                                    <div className="flex items-center gap-1.5 text-xs bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 text-gray-600">
                                                        <span>⚖️ BB: <strong>{record.berat_badan || record.weight || '-'} kg</strong></span>
                                                    </div>
                                                    <div className="flex items-center gap-1.5 text-xs bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 text-gray-600">
                                                        <span>📏 TB: <strong>{record.tinggi_badan || record.height || '-'} cm</strong></span>
                                                    </div>
                                                    {(record.lingkar_lengan || record.lila) && (
                                                        <div className="flex items-center gap-1.5 text-xs bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 text-gray-600">
                                                            <span>💪 LiLA: <strong>{record.lingkar_lengan || record.lila} cm</strong></span>
                                                        </div>
                                                    )}
                                                    {(record.hemoglobin || record.hb) && (
                                                        <div className="flex items-center gap-1.5 text-xs bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 text-gray-600">
                                                            <span>🩸 Hb: <strong>{record.hemoglobin || record.hb} g/dL</strong></span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`detail-panel ${isOpen ? 'open' : ''}`}>
                                            <div className="px-5 md:px-6 pb-6 border-t border-gray-100 pt-5 space-y-5">
                                                {record.notes && (
                                                    <div className="p-4 rounded-xl bg-teal-50/50 border border-teal-100 text-sm">
                                                        <p className="font-bold text-teal-800 mb-1">Catatan / Rekomendasi</p>
                                                        <p className="text-teal-700/80">{record.notes}</p>
                                                    </div>
                                                )}

                                                <div className="flex gap-2.5 pt-1">
                                                    <button onClick={() => setConfirmDelete(record)}
                                                        className="px-4 py-2.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-xl text-xs font-bold transition-colors flex items-center gap-2 border border-red-100">
                                                        Hapus
                                                    </button>
                                                    <button onClick={() => window.print()}
                                                        className="px-4 py-2.5 bg-slate-50 text-gray-600 hover:bg-slate-100 rounded-xl text-xs font-bold transition-colors flex items-center gap-2 border border-slate-200">
                                                        Cetak
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => setExpandedId(isOpen ? null : record.id)}
                                            className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-semibold border-t border-gray-100 hover:bg-slate-50/50 transition-colors text-teal-700"
                                        >
                                            <span>{isOpen ? 'Sembunyikan Detail' : 'Lihat Detail'}</span>
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>

            {/* Modal Konfirmasi Hapus */}
            {confirmDelete && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                    onClick={() => setConfirmDelete(null)}>
                    <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full"
                        onClick={e => e.stopPropagation()}>
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-gray-900">Hapus Pemeriksaan?</h3>
                            <p className="text-sm text-gray-500 mt-2">
                                Data pemeriksaan <strong>{confirmDelete.nama_anak || confirmDelete.child_name}</strong> akan dihapus secara permanen.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <button onClick={() => setConfirmDelete(null)}
                                className="flex-1 py-3 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-colors text-sm">
                                Batal
                            </button>
                            <button onClick={confirmDoDelete} disabled={deletingId !== null}
                                className="flex-1 py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors text-sm">
                                {deletingId ? 'Menghapus...' : 'Ya, Hapus'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}