import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

import "./ModalCentered.css";

const ModalCentered = (props) => {
	return (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered
		>
			<Modal.Header
				closeButton
				style={{
					backgroundColor: "#121212",
					color: "white",
				}}
			>
				<Modal.Title id='contained-modal-title-vcenter'>
					More Categories
				</Modal.Title>
			</Modal.Header>
			<Modal.Body
				style={{
					backgroundColor: "#121212",
					color: "white",
				}}
			>
				<Container>
					<Row>
						{props.categories.map((category) => (
							<Col
								key={category.id}
								className='col-3 d-flex flex-column align-items-center justify-content-center my-2 cat'
							>
								<Link to={`/genre/${category.id}`} className='d-flex flex-column align-items-center mainCat'>
									<img
										width={"64px"}
										src={category.icon}
										style={{
											filter:
												"invert(100%) sepia(100%) saturate(1%) hue-rotate(5deg) brightness(105%) contrast(101%)",
										}}
										alt=''
									/>
									<h4 className='text-center'>{category.name}</h4>
									{/* <hr className="w-100" style={{ borderTop: '1px solid white', marginBottom: '0', marginTop: '0'}} /> */}
								</Link>
							</Col>
						))}
					</Row>
				</Container>
			</Modal.Body>
			<Modal.Footer
				style={{
					backgroundColor: "#121212",
					color: "white",
				}}
			>
				<Button
					onClick={props.onHide}
					style={{
						backgroundColor: "#00425a",
						boxShadow: "0 4px 9px -4px #00425a",
					}}
				>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ModalCentered;
