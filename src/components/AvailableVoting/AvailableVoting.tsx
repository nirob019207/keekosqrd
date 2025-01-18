'use client'
import sneakers from "@/constants/productData/ProductData";
import { SneakerCard } from "./SneakerCard";
import { usePathname } from "next/navigation";

export function AvailableVoting() {
  const pathname = usePathname();
  const dynamicPadding = pathname === "/voting" ? "pt-[160px]" : "pb-[120px]";
  return (
    <section className={dynamicPadding}>
      <div className="container mx-auto px-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-default">
            Available Voting
          </h2>
          <p className="text-gray max-w-3xl mx-auto">
            Subscribe for $10/month and vote on your favorite sneakers. At the
            end of the month, a winner is randomly selected by the admin to
            receive the chosen sneaker.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sneakers.map((sneaker, index) => (
            <SneakerCard key={index} {...sneaker} />
          ))}
        </div>
      </div>
    </section>
  );
}
