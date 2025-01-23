"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { client } from "@/sanity/lib/client";
import { Product, User, Order } from "@/type";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const builder = imageUrlBuilder(client);
const urlFor = (source: { asset: { _ref: string; _type: string } }) =>
  builder.image(source);

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const [products, setProducts] = useState<Product[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  const fetchData = async () => {
    try {
      const productQuery = `*[_type == "product"]{ _id, title, description, "imageUrl": productImage.asset->url, price, rating }`;
      const userQuery = `*[_type == "user"]{ _id, name, email, role }`;
      const orderQuery = `*[_type == "order"]{ _id, customerName, totalAmount, status, createdAt }`;

      const productsData = await client.fetch(productQuery);
      const usersData = await client.fetch(userQuery);
      const ordersData = await client.fetch(orderQuery);

      setProducts(productsData);
      setUsers(usersData);
      setOrders(ordersData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Orders",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
  <Navbar/>
      <div className="flex flex-col md:flex-row h-screen">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-gray-800 text-white p-6 space-y-6">
          <h2 className="text-2xl font-bold text-center md:text-left">
            Admin Panel
          </h2>
          <div className="space-y-4 mt-10">
            {["dashboard", "products", "users", "orders"].map((tab) => (
              <Link
                key={tab}
                href="#"
                onClick={() => setActiveTab(tab)}
                className={`block text-lg hover:text-gray-300 ${activeTab === tab ? "text-gray-300" : ""}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Link>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-10 overflow-y-auto">
          {activeTab === "dashboard" && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Dashboard</h3>
              <div className="w-full overflow-x-auto">
                <Bar data={chartData} />
              </div>
            </div>
          )}

          {activeTab === "products" && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Products</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">ID</th>
                      <th className="border px-4 py-2">Title</th>
                      <th className="border px-4 py-2">Image</th>
                      <th className="border px-4 py-2">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product._id}>
                        <td className="border px-4 py-2">{product._id}</td>
                        <td className="border px-4 py-2">{product.title}</td>
                        <td className="border px-4 py-2">
                          <Image
                            src={
                              typeof product.imageUrl === "string"
                                ? product.imageUrl
                                : urlFor(product.imageUrl).url()
                            }
                            alt={product.title}
                            width={50}
                            height={50}
                            className="object-cover"
                          />
                        </td>
                        <td className="border px-4 py-2">${product.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "users" && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Users</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">ID</th>
                      <th className="border px-4 py-2">Name</th>
                      <th className="border px-4 py-2">Email</th>
                      <th className="border px-4 py-2">Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user._id}>
                        <td className="border px-4 py-2">{user._id}</td>
                        <td className="border px-4 py-2">{user.name}</td>
                        <td className="border px-4 py-2">{user.email}</td>
                        <td className="border px-4 py-2">{user.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "orders" && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Orders</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">ID</th>
                      <th className="border px-4 py-2">Customer Name</th>
                      <th className="border px-4 py-2">Total Amount</th>
                      <th className="border px-4 py-2">Status</th>
                      <th className="border px-4 py-2">Created At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order._id}>
                        <td className="border px-4 py-2">{order._id}</td>
                        <td className="border px-4 py-2">
                          {order.customerName}
                        </td>
                        <td className="border px-4 py-2">
                          ${order.totalAmount}
                        </td>
                        <td className="border px-4 py-2">{order.status}</td>
                        <td className="border px-4 py-2">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminPanel;
