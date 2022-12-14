import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { breakpoints } from "../../../constants/common";
import "./HeaderSearch.scss";

export default function HeaderSearch() {
  const inputRef = useRef(null);
  const handleChange = () => {
    console.log(inputRef.current.value);
  };
  const { screenWidth } = useSelector((store) => store.layoutReducer);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target[0].value;
    if (query) {
      const encodedQuery = encodeURIComponent(query);
      navigate(`/jobs?query=${encodedQuery}`);
    }
  };
  return (
    <div className="header__search">
      <form className="search__form d-flex" onSubmit={handleSubmit}>
        {screenWidth >= breakpoints.large ? (
          <>
            <input
              ref={inputRef}
              onChange={handleChange}
              type="text"
              className="form-control search__input hide-md"
              aria-describedby="helpId"
              placeholder="What service are you looking for today?"
            />
            <button type="submit" className="search__btn hide-md">
              <span
                className="search__icon"
                style={{ width: 16, height: 16 }}
                aria-hidden="true"
              >
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z" />
                </svg>
              </span>
            </button>
          </>
        ) : (
          <input
            type="text"
            className="form-control search__input show-md hide-sm"
            aria-describedby="helpId"
            placeholder="Find services"
          />
        )}
      </form>
    </div>
  );
}
