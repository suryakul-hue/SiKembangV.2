<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            // Kolom biodata orang tua & anak
            $table->string('gender')->nullable()->after('email');
            $table->string('child_name')->nullable()->after('gender');
            $table->date('child_dob')->nullable()->after('child_name');
            $table->enum('child_gender', ['L', 'P'])->nullable()->after('child_dob');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['gender', 'child_name', 'child_dob', 'child_gender']);
        });
    }
};