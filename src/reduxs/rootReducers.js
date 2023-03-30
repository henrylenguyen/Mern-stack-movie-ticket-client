import { combineReducers } from "@reduxjs/toolkit";
import NavBarSlice from "./Slice/admin/NavBarSlice";
import TicketSliceAdmin from "./Slice/admin/TicketSliceAdmin";
import UserSliceAdmin from "./Slice/admin/UserSliceAdmin";
import MovieSliceAdmin from "./Slice/admin/MovieSliceAdmin";
import TheaterSliceAdmin from "./Slice/admin/TheaterSliceAdmin"
// combineReducer
const rootReducer = combineReducers({


  movieAdmin: MovieSliceAdmin,
  navbar: NavBarSlice,
  TicketAdmin: TicketSliceAdmin,
  userAdmin: UserSliceAdmin,
  theaterAdmin: TheaterSliceAdmin,
});
export default rootReducer;
