# frozen_string_literal: true
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Clear existing data
ImpactCard.destroy_all

# Seed data
impact_cards = [
  {
    card_id: 'CARD001',
    brand: 'EcoGear',
    location: 'USA',
    sponsor: 'EarthFirst',
    reward: '10% Discount'
  },
  {
    card_id: 'CARD002',
    brand: 'GreenFuture',
    location: 'Canada',
    sponsor: 'ClimateCare',
    reward: 'Free Reusable Bag'
  },
  {
    card_id: 'CARD003',
    brand: 'SustainaHome',
    location: 'USA',
    sponsor: 'EarthFirst',
    reward: '10 Plant Points'
  },
  {
    card_id: 'CARD004',
    brand: 'OceanSave',
    location: 'UK',
    sponsor: 'SeaGuard',
    reward: '10% Discount'
  },
  {
    card_id: 'CARD005',
    brand: 'EcoGrow',
    location: 'Germany',
    sponsor: 'BioLife',
    reward: 'Free Seed Pack'
  }
]

ImpactCard.create!(impact_cards)

puts "Seeded #{ImpactCard.count} impact cards"
