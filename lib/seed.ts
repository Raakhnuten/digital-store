import { Product } from './types';

export const categories = ['Design', 'Streaming', 'Music', 'Software', 'AI Tools'];

export const sampleProducts: Product[] = [
  { id: '1', category_id: 'design', category: 'Design', name: 'CapCut Pro Access', description: 'Monthly editor access for creators.', price: 3.99, old_price: 5.99, image_url: 'https://placehold.co/600x400/2563eb/ffffff?text=CapCut', stock: 20, is_active: true },
  { id: '2', category_id: 'design', category: 'Design', name: 'Canva Team Seat', description: 'Shared premium design toolkit.', price: 4.49, old_price: 6.99, image_url: 'https://placehold.co/600x400/1d4ed8/ffffff?text=Canva', stock: 15, is_active: true },
  { id: '3', category_id: 'music', category: 'Music', name: 'Spotify Premium', description: 'Ad-free listening subscription.', price: 2.99, old_price: 4.99, image_url: 'https://placehold.co/600x400/0ea5e9/ffffff?text=Spotify', stock: 12, is_active: true },
  { id: '4', category_id: 'streaming', category: 'Streaming', name: 'Netflix Profile Slot', description: 'Private profile with secure login.', price: 5.99, old_price: 8.99, image_url: 'https://placehold.co/600x400/1e40af/ffffff?text=Netflix', stock: 0, is_active: true },
  { id: '5', category_id: 'software', category: 'Software', name: 'Telegram Premium 12M', description: 'Extended messaging features.', price: 3.5, old_price: 5.5, image_url: 'https://placehold.co/600x400/2563eb/ffffff?text=Telegram+Premium', stock: 8, is_active: true },
  { id: '6', category_id: 'software', category: 'Software', name: 'Windows 11 License Key', description: 'One-time activation key.', price: 14.99, old_price: 24.99, image_url: 'https://placehold.co/600x400/0284c7/ffffff?text=Windows+License', stock: 5, is_active: true },
  { id: '7', category_id: 'ai-tools', category: 'AI Tools', name: 'AI Tools Bundle', description: 'Curated monthly AI app package.', price: 9.99, old_price: 12.99, image_url: 'https://placehold.co/600x400/1e3a8a/ffffff?text=AI+Tools', stock: 10, is_active: true }
];
