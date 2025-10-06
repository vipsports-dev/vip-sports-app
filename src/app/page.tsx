import HeroCarousel from '@/components/home/HeroCarousel'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

export default function HomePage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 space-y-12">
      {/* HERO CAROUSEL */}
      <HeroCarousel />

      {/* Featured Contests Carousel (placeholder) */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Featured Contests</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>
                  <Skeleton className="h-6 w-3/4" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
                <Button className="w-full" disabled>
                  Join Contest
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Sports Lobbies Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Sports Lobbies</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {['NFL', 'NBA', 'MLB', 'NHL', 'Soccer', 'UFC'].map((sport) => (
            <Card
              key={sport}
              className="flex flex-col items-center justify-center py-8"
            >
              <Skeleton className="h-12 w-12 rounded-full mb-3" />
              <p className="font-medium">{sport}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Ad Blocks Placeholder */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Sponsored Ads</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="h-40 flex items-center justify-center">
              <Skeleton className="h-32 w-3/4" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}