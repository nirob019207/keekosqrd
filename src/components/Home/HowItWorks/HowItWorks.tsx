import steps from "@/constants/WorkData/WorkData"
export function HowItWorks() {
  return (
    <section className="md:py-[120px]">
      <div className="container mx-auto px-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-default">How It Works</h2>
          <p className="text-gray max-w-3xl mx-auto">
            Subscribe for $10/month and vote on your favorite sneakers. At the end of the month,
            a winner is randomly selected by the admin to receive the chosen sneaker.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg">
              <div className="bg-grey w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-default" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-default">{step.title}</h3>
              <p className="text-gray">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

