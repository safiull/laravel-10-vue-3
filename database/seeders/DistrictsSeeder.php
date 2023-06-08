<?php

namespace Database\Seeders;

use App\Models\Districts;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DistrictsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Districts::factory()->count(20)->create();
    }
}
