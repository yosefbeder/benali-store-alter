import { Category as CategoryType } from "@/types";

export default function Category({ header, slug, products }: CategoryType) {
  return (
    <div className="border-b-2 border-slate-400 dark:border-slate-300 last:border-0">
      <section className="section py-8">
        <h2 id={slug} className="text-center mb-8">
          {header}
        </h2>
        <ul className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
          {products.map(
            (
              { image, name, description, required, expectedPeriod, price },
              index
            ) => (
              <li
                key={index}
                className="rounded-xl border-b-2 border-slate-300 dark:border-slate-950 overflow-hidden h-max"
              >
                <img src={image} alt={name} />
                <div className="flex flex-col p-2 gap-2 bg-slate-100 dark:bg-slate-800">
                  <h3>{name}</h3>
                  {description && <p>{description}</p>}
                  {required && (
                    <>
                      <h4>✍️ المطلوب</h4>
                      <ol className="list-decimal pr-4">
                        {required.map((criteria, index) => (
                          <li key={index}>{criteria}</li>
                        ))}
                      </ol>
                    </>
                  )}

                  {expectedPeriod && (
                    <>
                      <h4>🗓️ الزمن المتوقع</h4>
                      <p>{expectedPeriod}</p>
                    </>
                  )}
                  <p className="text-2xl">
                    <b>{price}</b>
                  </p>
                </div>
              </li>
            )
          )}
        </ul>
      </section>
    </div>
  );
}
