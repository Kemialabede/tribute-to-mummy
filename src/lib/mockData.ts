import { Tribute } from './types';

export const mockTributes: Tribute[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    message: 'John was the kindest person I knew. His smile could light up any room. I will always cherish the memories we shared.',
    image_url: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop',
    created_at: '2023-12-01',
  },
  {
    id: '2',
    name: 'Michael Chen',
    message: 'Brother, you were always there for me. Your wisdom and humor will be greatly missed. Rest in peace.',
    image_url: null,
    created_at: '2023-12-02',
  },
  {
    id: '3',
    name: 'Emily Davis',
    message: 'John, you touched so many lives with your generosity and compassion. Heaven gained an angel today.',
    image_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    created_at: '2023-12-03',
  },
];

export const featuredPhotos = mockTributes.filter(t => t.image_url).slice(0, 3);