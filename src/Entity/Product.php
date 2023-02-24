<?php

namespace App\Entity;

use App\Repository\ProductRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProductRepository::class)]
class Product
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $Calories = null;

    #[ORM\Column(length: 255)]
    private ?string $Protein = null;

    #[ORM\Column(length: 255)]
    private ?string $Carbohydrates = null;

    #[ORM\Column(length: 255)]
    private ?string $Fat = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getCalories(): ?string
    {
        return $this->Calories;
    }

    public function setCalories(string $Calories): self
    {
        $this->Calories = $Calories;

        return $this;
    }

    public function getProtein(): ?string
    {
        return $this->Protein;
    }

    public function setProtein(string $Protein): self
    {
        $this->Protein = $Protein;

        return $this;
    }

    public function getCarbohydrates(): ?string
    {
        return $this->Carbohydrates;
    }

    public function setCarbohydrates(string $Carbohydrates): self
    {
        $this->Carbohydrates = $Carbohydrates;

        return $this;
    }

    public function getFat(): ?string
    {
        return $this->Fat;
    }

    public function setFat(string $Fat): self
    {
        $this->Fat = $Fat;

        return $this;
    }
}
