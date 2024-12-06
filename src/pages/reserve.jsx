import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReservationManagement = () => {
    const [reservations, setReservations] = useState([]);
    const [reservation, setReservation] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch reservations on component mount
        const fetchReservations = async () => {
            const response = await fetch('/api/reservations'); // Adjust the API endpoint as needed
            const data = await response.json();
            setReservations(data);
        };
        fetchReservations();
    }, []);

    const handleDelete = async (id) => {
        await fetch(`/api/reservations/delete/${id}`, { method: 'POST' });
        setReservations(reservations.filter(res => res.reservation_id !== id));
    };

    const handleAddReservation = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newReservation = {
            courtnumber: formData.get('courtnumber'),
            date: formData.get('date'),
            time: formData.get('time'),
        };

        await fetch('/api/reservations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newReservation),
        });

        // Refresh the reservations list
        const response = await fetch('/api/reservations');
        const data = await response.json();
        setReservations(data);
        navigate('/admin/reservations'); // Redirect after adding
    };

    return (
        <div className="container mt-4">
            {reservations.length > 0 && <h2>Reservations List</h2>}
            {reservation && <h2>Edit Reservation</h2>}
            {!reservation && reservations.length === 0 && <h2>Add New Reservation</h2>}

            {reservations.length > 0 && (
                <div>
                    <a href="/admin/reservations/add" className="btn btn-primary mb-3">Add New Reservation</a>
                    <a href="/admin/reservations/download" className="btn btn-success mb-3">Download Reservations</a>
                    <a href="/admin/reservations/upload" className="btn btn-warning mb-3">Upload Reservations</a>

                    <table className="table table-bordered table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>Court Number</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reservations.map(reservation => (
                                <tr key={reservation.reservation_id}>
                                    <td>{reservation.reservation_id}</td>
                                    <td>{reservation.courtnumber}</td>
                                    <td>{new Date(reservation.date).toLocaleDateString()}</td>
                                    <td>{new Date(reservation.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                                    <td>
                                        <a href={`/admin/reservations/edit/${reservation.reservation_id}`} className="btn btn-warning btn-sm">Edit</a>
                                        <button onClick={() => handleDelete(reservation.reservation_id)} className="btn btn-danger btn-sm">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {!reservation && reservations.length === 0 && (
                <div>
                    <h2>Add New Reservation</h2>
                    <form onSubmit={handleAddReservation}>
                        <div className="mb-3">
                            <label htmlFor="courtnumber" className="form-label">Court Number</label>
                            <input type="text" className="form-control" id="courtnumber" name="courtnumber" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Date</label>
 <input type="date" className="form-control" id="date" name="date" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="time" className="form-label">Time</label>
                            <input type="time" className="form-control" id="time" name="time" required />
                        </div>
                        <button type="submit" className="btn btn-primary">Add Reservation</button>
                        <a href="/admin/reservations" className="btn btn-secondary">Cancel</a>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ReservationManagement;