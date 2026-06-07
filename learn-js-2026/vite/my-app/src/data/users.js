// ============================================================
//  mockupData.js
//  React Learning Mockup Data — Full-Stack Web Dev Course 2026
//  Day 13–14: Components, Props, useState, .map()
//
//  Usage:
//    import { users, albums } from './mockupData'
//
//  Each user has:  id, name, username, email, title, bio,
//                  avatar, location, website, followers
//
//  Each album has: id, userId, title, images[]
//  Each image has: id, url, caption, likes
//
//  All images are served from picsum.photos (no API key needed)
// ============================================================

export const users = [
  {
    id: 1,
    name: "Aria Thompson",
    username: "aria.t",
    email: "aria@example.com",
    title: "UI/UX Designer",
    bio: "Designing clean interfaces and obsessing over every pixel. Coffee-powered creative.",
    avatar: "https://i.pravatar.cc/150?img=1",
    location: "Bangkok, Thailand",
    website: "https://aria.design",
    followers: 1240,
  },
  {
    id: 2,
    name: "Kai Nakamura",
    username: "kai.dev",
    email: "kai@example.com",
    title: "Frontend Developer",
    bio: "React enthusiast. Open-source contributor. Cat person.",
    avatar: "https://i.pravatar.cc/150?img=2",
    location: "Tokyo, Japan",
    website: "https://kainakamura.dev",
    followers: 3870,
  },
  {
    id: 3,
    name: "Sofia Reyes",
    username: "sofia_snaps",
    email: "sofia@example.com",
    title: "Travel Photographer",
    bio: "Chasing golden hour around the world. Always lost, never missing a shot.",
    avatar: "https://i.pravatar.cc/150?img=3",
    location: "Barcelona, Spain",
    website: "https://sofiasnaps.com",
    followers: 8920,
  },
  {
    id: 4,
    name: "Liam O'Brien",
    username: "liam.codes",
    email: "liam@example.com",
    title: "Full-Stack Engineer",
    bio: "Building things on the internet. Next.js + MySQL is my jam.",
    avatar: "https://i.pravatar.cc/150?img=4",
    location: "Dublin, Ireland",
    website: "https://liamobrien.io",
    followers: 2150,
  },
  {
    id: 5,
    name: "Yuna Choi",
    username: "yunacreates",
    email: "yuna@example.com",
    title: "Graphic Designer",
    bio: "Typography nerd. Making brands look beautiful since 2018.",
    avatar: "https://i.pravatar.cc/150?img=5",
    location: "Seoul, South Korea",
    website: "https://yunacreates.kr",
    followers: 5600,
  },
  {
    id: 6,
    name: "Marco Bianchi",
    username: "marco.photo",
    email: "marco@example.com",
    title: "Street Photographer",
    bio: "Rome-based storyteller. Film over digital, always.",
    avatar: "https://i.pravatar.cc/150?img=6",
    location: "Rome, Italy",
    website: "https://marcobianchi.it",
    followers: 4310,
  },
  {
    id: 7,
    name: "Priya Sharma",
    username: "priya_builds",
    email: "priya@example.com",
    title: "Backend Developer",
    bio: "API architect. Database wizard. Lover of clean documentation.",
    avatar: "https://i.pravatar.cc/150?img=7",
    location: "Mumbai, India",
    website: "https://priyasharma.dev",
    followers: 1980,
  },
  {
    id: 8,
    name: "Noah Williams",
    username: "noahwanders",
    email: "noah@example.com",
    title: "Adventure Blogger",
    bio: "Hiked 40 countries. Documenting wild places and wilder ideas.",
    avatar: "https://i.pravatar.cc/150?img=8",
    location: "Vancouver, Canada",
    website: "https://noahwanders.ca",
    followers: 11400,
  },
  {
    id: 9,
    name: "Amara Diallo",
    username: "amara.art",
    email: "amara@example.com",
    title: "Digital Artist",
    bio: "Creating worlds with pixels. Commissions open.",
    avatar: "https://i.pravatar.cc/150?img=9",
    location: "Dakar, Senegal",
    website: "https://amaraart.com",
    followers: 7750,
  },
  {
    id: 10,
    name: "Jake Porter",
    username: "jake.porter",
    email: "jake@example.com",
    title: "Product Manager",
    bio: "Turning user pain into shipped features. Roadmaps and retrospectives.",
    avatar: "https://i.pravatar.cc/150?img=10",
    location: "Austin, TX, USA",
    website: "https://jakeporter.com",
    followers: 930,
  },
  {
    id: 11,
    name: "Hana Suzuki",
    username: "hana.lens",
    email: "hana@example.com",
    title: "Portrait Photographer",
    bio: "Finding emotion in faces. Studio & outdoor sessions available.",
    avatar: "https://i.pravatar.cc/150?img=11",
    location: "Osaka, Japan",
    website: "https://hanalens.jp",
    followers: 6430,
  },
  {
    id: 12,
    name: "Elias Müller",
    username: "elias.dev",
    email: "elias@example.com",
    title: "DevOps Engineer",
    bio: "CI/CD pipelines, Docker, and dark mode everything.",
    avatar: "https://i.pravatar.cc/150?img=12",
    location: "Berlin, Germany",
    website: "https://eliasmuller.de",
    followers: 1670,
  },
];

// ============================================================
//  Helper: get user by id
//  Usage: getUserById(5)  →  Yuna's profile
// ============================================================
export function getUserById(id) {
  return users.find((user) => user.id === id) || null;
}