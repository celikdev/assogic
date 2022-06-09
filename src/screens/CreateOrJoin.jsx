import axios from "axios";
import { Button, ErrorBox, Input } from "../components/main/UI";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { CustomModal } from "../components/main";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CreateOrJoin = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["userToken"]);

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [companyNumber, setCompanyNumber] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!cookies.userToken) {
      navigate("/login");
    }
  }, []);

  const handleCreateCompany = async () => {
    setLoading(true);
    await axios
      .post(
        `${process.env.REACT_APP_ALTOGIC_BASE_URL}/company/create`,
        {
          companyName,
          companyNumber,
        },
        {
          headers: {
            Session: `${cookies.userToken}`,
          },
        }
      )
      .then((res) => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
        setErrorMessage("Invalid Company Credentials!");
      });
  };

  const handleJoinCompany = async () => {
    setLoading(true);
    await axios
      .post(
        `${process.env.REACT_APP_ALTOGIC_BASE_URL}/company/join`,
        {
          companyNumber,
        },
        {
          headers: {
            Session: `${cookies.userToken}`,
          },
        }
      )
      .then((res) => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
        setErrorMessage("Invalid Company Credentials!");
      });
  };
  return (
    <>
      {/* Create Company Modal */}
      <CustomModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="w-full h-full flex flex-col items-center gap-4">
          <ErrorBox
            className="w-2/3"
            error={error}
            errorMessage={errorMessage}
          />
          <h1 className="font-bold text-main">Create Your Company</h1>
          <button
            className="absolute top-4 right-4 font-extrabold"
            onClick={() => setIsOpen(false)}
          >
            X
          </button>
          <Input
            onFocus={() => setError(false)}
            onChange={(e) => setCompanyName(e.target.value)}
            type="text"
            placeholder="Company Name"
          />
          <Input
            onChange={(e) => setCompanyNumber(e.target.value)}
            maxLength="6"
            type="text"
            pattern="[0-9]{6}"
            placeholder="Company Number - 6 Digits"
          />
          <Button loading={loading} onClick={handleCreateCompany}>
            <h1 className="text-sm font-bold">Create Company</h1>
          </Button>
        </div>
      </CustomModal>
      {/* Join Company Modal */}
      <CustomModal isOpen={isOpen2} setIsOpen={setIsOpen2}>
        <div className="w-full h-full flex flex-col items-center gap-4">
          <ErrorBox
            className="w-2/3"
            error={error}
            errorMessage={errorMessage}
          />
          <h1 className="font-bold text-main">Join Company</h1>
          <button
            className="absolute top-4 right-4 font-extrabold"
            onClick={() => setIsOpen2(false)}
          >
            X
          </button>
          <Input
            onChange={(e) => setCompanyNumber(e.target.value)}
            maxLength="6"
            type="text"
            pattern="[0-9]{6}"
            placeholder="Company Number - 6 Digits"
          />
          <Button loading={loading} onClick={handleJoinCompany}>
            <h1 className="text-sm font-bold">Join Company</h1>
          </Button>
        </div>
      </CustomModal>
      <div className="w-full h-[100vh] flex items-center justify-center">
        <button
          onClick={() => setIsOpen(true)}
          className="w-1/3 rounded-l-2xl transition-all duration-300 h-[90vh] hover:w-1/2 hover:h-full border-r-2 bg-secondary shadow-lg font-bold text-lg hover:text-xl"
        >
          Create Your Company
        </button>
        <button
          onClick={() => setIsOpen2(true)}
          className="w-1/3 rounded-r-2xl transition-all duration-300 h-[90vh] hover:w-1/2 hover:h-full border-r-2 bg-secondary shadow-lg font-bold text-lg hover:text-xl"
        >
          Join to Company
        </button>
      </div>
    </>
  );
};

export default CreateOrJoin;
