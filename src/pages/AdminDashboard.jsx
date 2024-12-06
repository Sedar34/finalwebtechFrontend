import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const translations = {
  en: {
    logoText: "Tennis Club",
    notifications: "Notifications",
    logout: "Logout",
    adminLink: "Admin",
    dashboardHeading: "Admin Dashboard",
    addNewMember: "Add New Member",
    searchMember: "Search Member",
    downloadData: "Download Data",
    uploadData: "Upload Data",
    username: "Username",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phoneNumber: "Phone Number",
    role: "Role",
    actions: "Actions",
    edit: "Edit",
    delete: "Delete",
    previous: "Previous",
    next: "Next"
  },
  fr: {
    logoText: "Club de Tennis",
    notifications: "Notifications",
    logout: "Se Déconnecter",
    adminLink: "Admin",
    dashboardHeading: "Tableau de Bord Admin",
    addNewMember: "Ajouter un Membre",
    searchMember: "Rechercher un Membre",
    downloadData: "Télécharger les Données",
    uploadData: "Téléverser les Données",
    username: "Nom d'Utilisateur",
    firstName: "Prénom",
    lastName: "Nom",
    email: "E-mail",
    phoneNumber: "Numéro de Téléphone",
    role: "Rôle",
    actions: "Actions",
    edit: "Modifier",
    delete: "Supprimer",
    previous: "Précédent",
    next: "Suivant"
  },
  es: {
    logoText: "Club de Tenis",
    notifications: "Notificaciones",
    logout: "Cerrar Sesión",
    adminLink: "Admin",
    dashboardHeading: "Panel de Administración",
    addNewMember: "Agregar Nuevo Miembro",
    searchMember: "Buscar Miembro",
    downloadData: "Descargar Datos",
    uploadData: "Subir Datos",
    username: "Nombre de Usuario",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Correo Electrónico",
    phoneNumber: "Número de Teléfono",
    role: "Rol",
    actions: "Acciones",
    edit: "Editar",
    delete: "Eliminar",
    previous: "Anterior",
    next: "Siguiente"
  }
};

const AdminDashboard = () => {
  const [language, setLanguage] = useState('en');
  const [notificationDropdownVisible, setNotificationDropdownVisible] = useState(false);
  const [notificationTitle, setNotificationTitle] = useState('');
  const [notificationMessage, setNotificationMessage] = useState('');
  // const [users, setUsers] = useState([]); // Placeholder for user data
  // const [currentPage, setCurrentPage] = useState(0);
  // const [totalPages, setTotalPages] = useState(1); // Placeholder for pagination
  const users=[];
  const currentPage=0;
  const totalPages=1;
  
  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    setLanguage(savedLanguage);
    setLanguage(savedLanguage);
    // Load users data here, e.g., fetch from an API
    // For example: fetchUsers();
  }, []);

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem("selectedLanguage", selectedLanguage);
  };

  const toggleNotifications = () => {
    setNotificationDropdownVisible(!notificationDropdownVisible);
  };

  const sendNotification = () => {
    // Implement the notification sending logic here
    console.log('Sending notification:', { title: notificationTitle, message: notificationMessage });
    // Reset notification fields
    setNotificationTitle('');
    setNotificationMessage('');
  };

  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div id="logo" className="text-2xl font-bold text -gray-800">{translations[language].logoText}</div>
          <ul className="flex space-x-4">
            <li><a href="/admin" className="text-gray-600 hover:text-gray-800">{translations[language].adminLink}</a></li>
            <li>
              <button className="relative text-gray-600 hover:text-gray-800" onClick={toggleNotifications}>
                <i className="fas fa-bell"></i>
                <span className="absolute top-0 right-0 inline-block w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full">0</span>
              </button>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <a href="/logout" className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">{translations[language].logout}</a>
            <select id="language-select" onChange={handleLanguageChange} className="px-2 py-1 border rounded">
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="es">Español</option>
            </select>
          </div>
        </div>
        {notificationDropdownVisible && (
          <div className="absolute right-20 bg-white shadow-lg rounded p-4 w-80 mt-2">
            <h6 className="font-bold text-gray-800">{translations[language].notifications}</h6>
            <div id="notification-list"></div>
          </div>
        )}
      </header>

      <div className="container mx-auto px-4 py-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{translations[language].dashboardHeading}</h3>
        <div className="mb-6 flex space-x-4">
          <a href="/admin/add" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">{translations[language].addNewMember}</a>
          <a href="/admin/search" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">{translations[language].searchMember}</a>
          <a href="/admin/download/users" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">{translations[language].downloadData}</a>
          <a href="/admin/upload/furniture" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">{translations[language].uploadData}</a>
        </div>
        <table className="min-w-full bg-white shadow-md rounded overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4 text-left">{translations[language].username}</th>
              <th className="py-2 px-4 text-left">{translations[language].firstName}</th>
              <th className="py-2 px-4 text-left">{translations[language].lastName}</th>
              <th className="py-2 px-4 text-left">{translations[language].email}</th>
              <th className="py-2 px-4 text-left">{translations[language].phoneNumber}</th>
              <th className="py-2 px-4 text-left">{translations[language].role}</th>
              <th className="py-2 px-4 text-left">{translations[language].actions}</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{user.username}</td>
                <td className="py-2 px-4">{user.firstName}</td>
                <td className="py-2 px-4">{user.lastName}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.phoneNumber}</td>
                <td className="py-2 px-4">{user.role}</td>
                <td className="py-2 px-4 flex space-x-2">
                  <a href={`/admin/users/edit/${user.id}`} className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">{translations[language].edit}</a>
                  <button className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700" onClick={() => {/* Implement delete logic here */}}>{translations[language].delete}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Notification Form */}
        <form id="send-notification-form" className="mt-6 bg-white p-4 shadow-md rounded" onSubmit={(e) => { e.preventDefault(); sendNotification(); }}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">Notification Title</label>
            <input type="text" id="title" name="title" className="w-full px-3 py-2 border rounded" placeholder="Notification Title" required value={notificationTitle} onChange={(e) => setNotificationTitle(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea id="message" name="message" className="w-full px-3 py-2 border rounded" placeholder="Message" required value={notificationMessage} onChange={(e) => setNotificationMessage(e.target.value)} />
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Send Notification</button>
        </form>
      </div>

      {/* Pagination Controls */}
      <nav aria-label="Page navigation" className="mt-6">
        <ul className="flex justify-center space-x-2">
          <li className={currentPage === 0 ? 'disabled' : ''}>
            <a className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300" href={`/admin?pageNo=${currentPage - 1}`} disabled={currentPage === 0}>{translations[language].previous}</a>
          </li>
          {[...Array(totalPages)].map((_, i) => (
            <li key={i} className={currentPage === i ? 'active' : ''}>
              <a className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300" href={`/admin?pageNo=${i}`}>{i + 1}</a>
            </li>
          ))}
          <li className={currentPage === totalPages - 1 ? 'disabled' : ''}>
            <a className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300" href={`/admin?pageNo=${currentPage + 1}`} disabled={currentPage === totalPages - 1}>{translations[language].next}</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminDashboard;