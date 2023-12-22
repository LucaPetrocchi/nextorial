import DashboardSkeleton from '@/app/ui/skeletons';

export default function Loading() {
  return <DashboardSkeleton />;
}

// applies ONLY to the overview route
// () doesn't count as a route, but still works with the nextjs file system
// e.g. if loading.tsx was in /dashboard instead of /dashboard/(overview)
// it'd apply to EVERY page in there