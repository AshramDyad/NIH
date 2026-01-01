export default function WithdrawalsContent() {
  const withdrawalPoints = [
    "One year calendar month's notice in writing or a month's fees in lieu of such notice must be given before a student can be withdrawn.",
    "Those who leave the school in May must in all cases pay the fees for the month of June.",
    "Transfer certificates are not issued until all dues of the school are settled.",
  ];

  const dismissalGrounds = [
    "Disciplinary",
    "Unsatisfactory progress in academics.",
    "Detention or repeated detention in a class. As a rule only those students will be retained on the rolls of this school who can take the school leaving examination and are under 18 years of age.",
    "A student who fails twice in the same class will not be permitted to continue his/her studies in the school especially if he/she is below average in that class.",
    "Where a withdrawal takes place due to the above reasons, the question of charging a month's fee in lieu of notice does not arise.",
  ];

  return (
    <section className="relative sm:py-16 py-12 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
            <span className="text-primary italic">Withdrawals</span> Information
          </h1>
        </div>

        {/* Withdrawals Content */}
        <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto mt-8">
          <ul className="space-y-5 md:space-y-6">
            {withdrawalPoints.map((point, index) => (
              <li
                key={index}
                className="group relative bg-white rounded-2xl sm:p-6 p-4 shadow-sm border border-zinc-100 hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-3 w-2 h-2 rounded-full bg-primary" />
                  <p className="text-lg text-zinc-600 leading-relaxed flex-1">
                    {point}
                  </p>
                </div>
              </li>
            ))}

            {/* Grounds for Dismissal */}
            <li className="group relative bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-zinc-100 hover:border-primary/30 hover:shadow-md transition-all duration-300">
              <div className="space-y-4">
                <p className="text-lg font-bold text-zinc-900 mb-2">
                  Students can be asked to leave the school on the following grounds:
                </p>
                <ol className="space-y-4 ml-6 list-decimal">
                  {dismissalGrounds.map((ground, index) => (
                    <li key={index}>
                      <p className="text-lg text-zinc-600 leading-relaxed">
                        {ground}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </li>

            {/* Refund Policy */}
            <li className="group relative bg-white rounded-2xl sm:p-6 p-4 shadow-sm border border-zinc-100 hover:border-primary/30 hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="mt-3 w-2 h-2 rounded-full bg-primary" />
                <p className="text-lg text-zinc-600 leading-relaxed flex-1">
                  A student who is admitted to the school and all admission formalities are complete is only refunded the caution fee if he/she wants to withdraw from the school.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
