async function addItem(type) {
  if (type === "carrier") {
    const form = document.getElementById("carrierForm");
    console.log(form.elements);
    const carrier = {
      type: form.elements["type"].value,
      licensePlate: form.elements["licensePlate"].value,
      maxPackagings: form.elements["maxPackagings"].value,
    };

    if (!carrier.type || !carrier.licensePlate || !carrier.maxPackagings) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const response = await fetch("/carriers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(carrier),
      });

      if (response.ok) {
        alert("Carrier added successfully!");
      } else {
        alert("Error adding carrier.");
      }

      form.reset();
    } catch (error) {
      alert("An error occurred while adding the carrier.");
    }
  } else if (type === "product") {
    const form = document.getElementById("productForm");

    const product = {
      name: form.elements["name"].value,
      quantity: form.elements["quantity"].value,
    };

    if (!product.name || !product.quantity) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const response = await fetch("/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        alert("Product added successfully!");
      } else {
        alert("Error adding prduct.");
      }

      form.reset();
    } catch (error) {
      alert("An error occurred while adding the carrier.");
    }
  } else if (type === "packaging") {
    const form = document.getElementById("packagingForm");

    const packaging = {
      type: form.elements["type"].value,
      quantity: form.elements["quantity"].value,
    };

    if (!packaging.type || !packaging.quantity) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const response = await fetch("/packagings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(packaging),
      });

      if (response.ok) {
        alert("Packaging added successfully!");
      } else {
        alert("Error adding packaging.");
      }

      form.reset();
    } catch (error) {
      alert("An error occurred while adding the packaging.");
    }
  } else if (type === "packagedProduct") {
    const form = document.getElementById("packagedProductForm");

    const packagedProduct = {
      productId: form.elements["productId"].value,
      packagingId: form.elements["packagingId"].value,
    };

    if (!packagedProduct.productId || !packagedProduct.packagingId) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const response = await fetch("/packaged-products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(packagedProduct),
      });

      if (response.ok) {
        alert("Successfully packaged the product!");
      } else {
        alert("Error adding packaged product.");
      }

      form.reset();
    } catch (error) {
      alert("An error occurred while adding the packaged product.");
    }
  } else if (type === "planTransport") {
    const form = document.getElementById("planTransportForm");

    const planTransport = {
      start: form.elements["startDate"].value,
      end: form.elements["endDate"].value,
      packagedProducts: form.elements["packagedProducts"].value,
    };

    if (
      !planTransport.start ||
      !planTransport.end ||
      !planTransport.packagedProducts
    ) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const response = await fetch("/planned-transports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(planTransport),
      });

      if (response.ok) {
        alert("Successfully planned the new transport!");
      } else {
        throw new Error("Error planning transport.");
      }
    } catch (error) {
      alert("An error occurred while planning the new transport.");
    }
  }
}

// Make it accessible globally
window.addItem = addItem;
