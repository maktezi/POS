<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => fake()->jobTitle(),
            'description' => fake()->sentence(),
            'user_id' => function () {
              return User::factory()->create()->id;
            }
        ];
    }
}
