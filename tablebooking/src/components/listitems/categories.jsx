import { useState } from "react";
import { useCart } from "../contextapi/cartcontext";
import { Button, Card, Modal } from "react-bootstrap";
import { foodItems } from "../../data";
import Services from "../Services/services";

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const { addItemToCart } = useCart();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleAddItem = (item) => {
    addItemToCart(item);
    setModalMessage("Item added to cart!");
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const filteredFoodItems = foodItems.flatMap((category) =>
    category.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div>
      <div className="container pb-10">
        <h2 className="flex justify-center font-semibold text-4xl py-4">
          Choose What's In Your Mind
        </h2>

        <input
          type="text"
          placeholder="Search for food items..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="form-control mb-4 px-5 py-2 container shadow-md shadow-black border rounded-md"
        />

        {filteredFoodItems.length > 0 ? (
          <div className="container flex flex-wrap justify-center gap-6">
            {filteredFoodItems.map((item, index) => (
              <div key={index} className="py-2">
                <Card
                  className="w-auto h-auto max-w-xs rounded-3xl hover:scale-110 transition duration-150 cursor-pointer"
                  style={{ width: "18rem", height: "22rem" }}
                >
                  <Card.Img
                    variant="top"
                    src={item.image}
                    className="h-36 w-35 p-0"
                  />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.rating}</Card.Text>
                    <Card.Text>{item.description}</Card.Text>
                    <Button
                      variant="warning"
                      onClick={() => handleAddItem(item)}
                    >
                      Add Item
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        ) : (
          <p>No food items found.</p>
        )}

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Cart Update</Modal.Title>
          </Modal.Header>
          <Modal.Body>{modalMessage}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <Services />
    </div>
  );
};

export default Categories;
