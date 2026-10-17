const steps = ["Basket", "Delivery details", "Unpaid review"];

export function CheckoutSteps({ current }: { current: 1 | 2 | 3 }) {
  return (
    <ol className="checkout-steps" aria-label="Checkout progress">
      {steps.map((step, index) => (
        <li key={step} aria-current={index + 1 === current ? "step" : undefined}>
          <span className="step-number" aria-hidden="true">{index + 1}</span>
          <span>{step}</span>
        </li>
      ))}
    </ol>
  );
}
