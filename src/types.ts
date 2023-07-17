export interface Network {
  imageUrl: string;
  title: string;
  description: string;
  metrics: number;
  delegated?: string;
  tvl?: string;
  live: boolean;
}