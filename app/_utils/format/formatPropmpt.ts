export function formatOrdersForPrompt(foundOrders: any[]) {
  return foundOrders
    .map(
      (order) => `
      Order Number: ${order.number}
      Created At: ${order.created_at}
      Payment Status: ${order.payment}
      Fulfillment Status: ${order.fulfillment}
      Total: $${order.total}
      Shipping At: ${order.shipped_at}

      Customer:
      Name: ${order.customer.name}
      Email: ${order.customer.email}
      Phone: ${order.customer.phone}
      Address: ${order.customer.address}

      Items:
      ${order.items
        .map(
          (item: any) => `
      - ${item.title}
        SKU: ${item.skuId}
        Price: $${item.price}
      `,
        )
        .join('\n')}
      `,
    )
    .join('\n\n');
}
