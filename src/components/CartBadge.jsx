import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";

const CartBadge = () => {
  const count = useSelector((state) => state.counter.value);
  return (
    <Badge
      badgeContent={count}
      color="primary"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <ShoppingCartOutlinedIcon
        style={{ fontWeight: "bold", fontSize: "24px" }}
      />
    </Badge>
  );
};

export default CartBadge;
