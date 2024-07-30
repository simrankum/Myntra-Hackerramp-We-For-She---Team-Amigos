// MyOrdersPage.js
import React, { useState } from 'react';
import './MyOrdersPage.css';

const MyOrdersPage = () => {
    // Mock data for orders
    const orders = [
        {
            id: 1,
            orderNumber: '1135091-0421900-0949001',
            imgSrc: "/Order1.png",
            title: 'Classic Blue Solid Denim Jacket for men',
            size: '42',
            quantity: 1,
            price: 459,
            originalPrice: 1149,
            saved: 690,
            orderedDate: '03 Mar',
            deliveryDate: '10 Mar'
        },
        {
            id: 2,
            orderNumber: '1135090-9755386-6084703',
            imgSrc: "/Order2.png",
            title: 'Ribbed Sleeveless top for women',
            size: '40',
            quantity: 1,
            price: 512,
            originalPrice: 1349,
            saved: 837,
            orderedDate: '03 Mar',
            deliveryDate: '10 Mar'
        }
    ];

    const [videos, setVideos] = useState({});
    const [likes, setLikes] = useState({ 1: 0, 2: 0 });
    const [shares, setShares] = useState({ 1: 0, 2: 0 });

    const handleVideoUpload = (id, event) => {
        const video = URL.createObjectURL(event.target.files[0]);
        setVideos({ ...videos, [id]: video });
    };

    const handleLike = (id) => {
        setLikes({ ...likes, [id]: likes[id] + 1 });
    };

    const handleShare = (id) => {
        setShares({ ...shares, [id]: shares[id] + 1 });
    };

    return (
        <div className="orders-container">
            <h2>My Orders</h2>
            {orders.map(order => (
                <div key={order.id} className="order-item">
                    <div className="order-header">
                        <span className="order-number">ORDER NO: {order.orderNumber}</span>
                        <button className="order-details-btn">Order Details</button>
                    </div>
                    <div className="order-content">
                        <img src={order.imgSrc} alt={order.title} className="order-image" />
                        <div className="order-info">
                            <h3>{order.title}</h3>
                            <p>Size: {order.size} | Qty: {order.quantity}</p>
                            <p className="price">
                                ₹ {order.price} <span className="original-price">₹ {order.originalPrice}</span> <span className="saved">Saved ₹ {order.saved}</span>
                            </p>
                            <div className="order-actions">
                                <button className="cancel-btn">Review</button>
                                <label htmlFor={`upload-zeal-${order.id}`} className="upload-zeal-btn">
                                    Upload Zeal
                                </label>
                                <input
                                    type="file"
                                    id={`upload-zeal-${order.id}`}
                                    accept="video/*"
                                    onChange={(event) => handleVideoUpload(order.id, event)}
                                    style={{ display: 'none' }}
                                />
                            </div>
                            {videos[order.id] && (
                                <div className="uploaded-video">
                                    <video width="200" controls>
                                        <source src={videos[order.id]} type="video/mp4" />
                                    </video>
                                    <div className="video-actions">
                                        <button onClick={() => handleLike(order.id)}>Like ({likes[order.id]})</button>
                                        <button onClick={() => handleShare(order.id)}>Share ({shares[order.id]})</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="order-footer">
                        <div className="order-dates">
                            <span>Ordered: {order.orderedDate}</span>
                            <span>Delivery: {order.deliveryDate}</span>
                        </div>
                        <div className="order-rating">
                            <span>Bought this product for</span>
                            <div>
                                <button>Myself</button>
                                <button>Others</button>
                            </div>
                            <div className="stars">
                                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyOrdersPage;
