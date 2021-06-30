import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory,useParams } from "react-router-dom";
import { loadWishlists, editWishlist } from "../store/wishLists";

export default function RaceDetails(props){
    const { show, closeModal } = props;
    const dispatch=useDispatch()

    //  const race = useSelector((state) => state);

}
