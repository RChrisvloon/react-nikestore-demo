import Modal from "../UI/Modal";

const Cart = (props) => {
  return (
    <Modal onClose={props.hideCart}>
      <div>
        Cart content
      </div>
    </Modal>
  );
}

export default Cart;