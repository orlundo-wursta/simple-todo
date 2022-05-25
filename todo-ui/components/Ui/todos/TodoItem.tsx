import { useState } from "react";
import { useDrag } from "react-dnd";
import styles from "./TodoItem.module.css";
import MoreVertIcon from "@mui/icons-material";
import { Button, Modal, Popper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CustomModal from "../CustomModal";

export interface TodoItemProps {
  _id: string;
  title: string;
  status: string;
}

const TodoItem: React.FC<TodoItemProps> = (props) => {};
