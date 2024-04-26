import React, { useState } from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

export default function BillingHistory() {
  //Dummy data
  const [invoices] = useState([
    {
      id: "invoice1",
      name: "Invoice 1",
      amount: "$100",
      date: "2024-04-19",
      status: "Paid",
    },
    {
      id: "invoice2",
      name: "Invoice 2",
      amount: "$150",
      date: "2024-04-18",
      status: "Pending",
    },
    {
      id: "invoice3",
      name: "Invoice 3",
      amount: "$200",
      date: "2024-04-17",
      status: "Paid",
    },
  ]);

  const downloadInvoice = (invoiceId) => {
    // Send request to backend to generate and download PDF
    // fetch(`/download/invoice/${invoiceId}`)
    //   .then(response => response.blob())
    //   .then(blob => {
    //     const url = window.URL.createObjectURL(new Blob([blob]));
    //     const a = document.createElement('a');
    //     a.href = url;
    //     a.download = `${invoiceId}.pdf`;
    //     document.body.appendChild(a);
    //     a.click();
    //     window.URL.revokeObjectURL(url);
    //   })
    //   .catch(error => console.error('Error downloading invoice:', error));
  };

  return (
    <>
      <Navbar />
      <div className="billing-history">
        <h2 className="text-5xl text-center p-20 font-semibold mb-4">
          Billing History
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="bg-orange-200 mx-10">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            {invoices.length > 0 ? (
              <tbody>
                {invoices.map((invoice, index) => (
                  <tr
                    key={invoice.id}
                    className={index % 2 === 0 ? "bg-orange-100" : "bg-white"}
                  >
                    <td className="border px-4 py-2">{invoice.name}</td>
                    <td className="border px-4 py-2">{invoice.amount}</td>
                    <td className="border px-4 py-2">{invoice.date}</td>
                    <td className="border px-4 py-2">{invoice.status}</td>
                    <td className="border px-4 py-2">
                      <button
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
                        onClick={() => downloadInvoice(invoice.id)}
                        aria-label={`Download ${invoice.name} invoice`}
                      >
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tbody>
                <tr>
                  <td colSpan="5" className="px-4 py-2 text-center">
                    No invoices found.
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}
