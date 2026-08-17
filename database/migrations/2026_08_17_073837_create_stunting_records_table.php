<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('stunting_records', function (Blueprint $table) {
            $table->id();
            // Menghubungkan record ke user_id
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            
            // Data input pemeriksaan stunting
            $table->string('child_name');
            $table->enum('gender', ['L', 'P']);
            $table->integer('age_months'); // Usia dalam bulan
            $table->decimal('height', 5, 2); // Tinggi/Panjang badan (cm)
            $table->decimal('weight', 5, 2)->nullable(); // Berat badan (kg)
            
            // Hasil evaluasi / kalkulasi
            $table->decimal('z_score', 4, 2)->nullable();
            $table->string('status'); // Contoh: 'Normal', 'Stunted', 'Severely Stunted', 'Tinggi'
            $table->text('notes')->nullable(); // Rekomendasi/saran

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('stunting_records');
    }
};