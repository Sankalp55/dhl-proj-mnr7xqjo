import Image from 'next/image'

type TeamMember = {
  name: string
  role: string
  bio: string
  imageUrl: string
}

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <section className="space-y-6">
        <h1 className="text-3xl font-semibold">About</h1>
        <p className="text-muted-foreground">
          We build reliable logistics and delivery experiences with a focus on measurable outcomes.
        </p>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Team</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(
            [
              {
                name: 'Avery Klein',
                role: 'Head of Operations',
                bio: 'Leads network performance, delivery quality, and continuous improvement initiatives with a focus on measurable on-time outcomes.',
                imageUrl:
                  'https://images.pexels.com/photos/36766005/pexels-photo-36766005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              },
              {
                name: 'Jordan Patel',
                role: 'Customer Success Lead',
                bio: 'Partners with customers to ensure smooth onboarding, proactive communication, and consistent service quality.',
                imageUrl:
                  'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              },
              {
                name: 'Morgan Lee',
                role: 'Engineering Manager',
                bio: 'Builds scalable systems for routing, tracking, and operational visibility across the delivery lifecycle.',
                imageUrl:
                  'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              },
            ] as TeamMember[]
          ).map((member) => (
            <article
              key={member.name}
              className="rounded-xl border bg-background p-5 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <div className="font-medium">{member.name}</div>
                  <div className="text-sm text-muted-foreground">{member.role}</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{member.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
