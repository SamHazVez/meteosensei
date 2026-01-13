import React, { useState } from "react";

const SideMenu = ({ destinations, wishlist, onLocationClick, mapRef }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [showVisited, setShowVisited] = useState(true);
    const [showWishlist, setShowWishlist] = useState(true);
    const [activeCategory, setActiveCategory] = useState(null);

    // Compter les marqueurs totaux
    const visitedCount = destinations.reduce((acc, dest) => acc + dest.markers.length, 0);
    const wishlistCount = wishlist.reduce((acc, dest) => acc + dest.markers.length, 0);

    // Filtrer les destinations selon la recherche
    const filterDestinations = (destList, isWishlistType) => {
        return destList.filter((dest) => {
            const matchesSearch = 
                dest.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                dest.markers.some(m => m.popUp.toLowerCase().includes(searchTerm.toLowerCase()));
            const matchesFilter = isWishlistType ? showWishlist : showVisited;
            return matchesSearch && matchesFilter;
        });
    };

    const filteredDestinations = filterDestinations(destinations, false);
    const filteredWishlist = filterDestinations(wishlist, true);

    // Fonction pour centrer sur un marqueur
    const handleMarkerClick = (geocode, popup) => {
        if (mapRef && mapRef.current) {
            mapRef.current.setView(geocode, 13);
        }
        if (onLocationClick) {
            onLocationClick(geocode, popup);
        }
    };

    // Toggle catégorie
    const toggleCategory = (destId) => {
        setActiveCategory(activeCategory === destId ? null : destId);
    };

    return (
        <>
            {/* Bouton toggle pour mobile */}
            <button 
                className="menu-toggle" 
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
                {isOpen ? "✕" : "☰"}
            </button>

            {/* Menu latéral */}
            <div className={`side-menu ${isOpen ? "open" : "closed"}`}>
                <div className="menu-header">
                    <h2>🗺️ Mes Voyages</h2>
                </div>

                {/* Statistiques */}
                <div className="menu-stats">
                    <div className="stat-item visited">
                        <span className="stat-number">{visitedCount}</span>
                        <span className="stat-label">Lieux visités</span>
                    </div>
                    <div className="stat-item wishlist">
                        <span className="stat-number">{wishlistCount}</span>
                        <span className="stat-label">À visiter</span>
                    </div>
                </div>

                {/* Barre de recherche */}
                <div className="menu-search">
                    <input
                        type="text"
                        placeholder="Rechercher une destination..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                    {searchTerm && (
                        <button 
                            className="clear-search"
                            onClick={() => setSearchTerm("")}
                            aria-label="Effacer la recherche"
                        >
                            ✕
                        </button>
                    )}
                </div>

                {/* Filtres */}
                <div className="menu-filters">
                    <label className="filter-checkbox">
                        <input
                            type="checkbox"
                            checked={showVisited}
                            onChange={(e) => setShowVisited(e.target.checked)}
                        />
                        <span>Destinations visitées</span>
                    </label>
                    <label className="filter-checkbox">
                        <input
                            type="checkbox"
                            checked={showWishlist}
                            onChange={(e) => setShowWishlist(e.target.checked)}
                        />
                        <span>Wishlist</span>
                    </label>
                </div>

                {/* Liste des destinations */}
                <div className="menu-destinations">
                    {/* Destinations visitées */}
                    {showVisited && filteredDestinations.length > 0 && (
                        <div className="destination-section">
                            <h3 className="section-title visited-title">✓ Destinations visitées</h3>
                            {filteredDestinations.map((dest) => (
                                <div key={dest.id} className="destination-item">
                                    <div 
                                        className="destination-header"
                                        onClick={() => toggleCategory(dest.id)}
                                    >
                                        <span className="destination-name">
                                            {dest.name || dest.id.charAt(0).toUpperCase() + dest.id.slice(1)}
                                        </span>
                                        <span className="destination-meta">
                                            <span className="destination-date">{dest.date}</span>
                                            <span className="destination-count">{dest.markers.length}</span>
                                            <span className="expand-icon">
                                                {activeCategory === dest.id ? "▼" : "▶"}
                                            </span>
                                        </span>
                                    </div>
                                    {activeCategory === dest.id && (
                                        <ul className="markers-list">
                                            {dest.markers.map((marker) => (
                                                <li 
                                                    key={marker.id}
                                                    className="marker-item"
                                                    onClick={() => handleMarkerClick(marker.geocode, marker.popUp)}
                                                >
                                                    📍 {marker.popUp}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Wishlist */}
                    {showWishlist && filteredWishlist.length > 0 && (
                        <div className="destination-section">
                            <h3 className="section-title wishlist-title">⭐ Wishlist</h3>
                            {filteredWishlist.map((dest) => (
                                <div key={`wishlist-${dest.id}`} className="destination-item wishlist-item">
                                    <div 
                                        className="destination-header"
                                        onClick={() => toggleCategory(`wishlist-${dest.id}`)}
                                    >
                                        <span className="destination-name">
                                            {dest.name || dest.id.charAt(0).toUpperCase() + dest.id.slice(1)}
                                        </span>
                                        <span className="destination-meta">
                                            <span className="destination-date">{dest.date}</span>
                                            <span className="destination-count">{dest.markers.length}</span>
                                            <span className="expand-icon">
                                                {activeCategory === `wishlist-${dest.id}` ? "▼" : "▶"}
                                            </span>
                                        </span>
                                    </div>
                                    {activeCategory === `wishlist-${dest.id}` && (
                                        <ul className="markers-list">
                                            {dest.markers.map((marker) => (
                                                <li 
                                                    key={marker.id}
                                                    className="marker-item"
                                                    onClick={() => handleMarkerClick(marker.geocode, marker.popUp)}
                                                >
                                                    📍 {marker.popUp}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Message si aucun résultat */}
                    {(showVisited || showWishlist) && 
                     filteredDestinations.length === 0 && 
                     filteredWishlist.length === 0 && (
                        <div className="no-results">
                            <p>Aucune destination trouvée</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default SideMenu;
