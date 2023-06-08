<?php

namespace Database\Factories;

use App\Models\Division;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Districts>
 */
class DistrictsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'division_id' => Division::inRandomOrder()->first()->id,
            'name' => ucfirst($this->faker->word),
            'description' => ucfirst($this->faker->sentance),
            'created_at' => now()
        ];
    }
}
