import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import NotFoundImage from "../assets/exampleAssets/image_not_found.png";
import GarbageImage from "../assets/trash.png";
import { Container, CustomModal, Header } from "../components/main";
import { Button, ErrorBox, Input } from "../components/main/UI";

const MyCompany = () => {
  const [cookies, setCookie] = useCookies(["userToken"]);

  const [companyData, setCompanyData] = useState({});
  const [assetData, setAssetData] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [assetName, setAssetName] = useState("");
  const [assetCategory, setAssetCategory] = useState("");
  const [assetImageURL, setAssetImageURL] = useState("");
  const [filteredCategory, setFilteredCategory] = useState("All");

  useEffect(() => {
    getCompanyData();
  }, []);

  const getCompanyData = async () => {
    await axios
      .get(`${process.env.REACT_APP_ALTOGIC_BASE_URL}/user/company`, {
        headers: {
          Session: `${cookies.userToken}`,
        },
      })
      .then((res) => setCompanyData(res.data.found))
      .then(() => getCompanyAssets());
  };

  const getCompanyAssets = async () => {
    await axios
      .get(`${process.env.REACT_APP_ALTOGIC_BASE_URL}/assets/all`, {
        headers: {
          Session: `${cookies.userToken}`,
        },
      })
      .then((res) => setAssetData(res.data))
      .catch((err) => console.error(err));
  };

  const handleAddAssets = async () => {
    setLoading(true);
    await axios
      .post(
        `${process.env.REACT_APP_ALTOGIC_BASE_URL}/assets/add`,
        {
          assetName: assetName,
          assetCategory: assetCategory,
          assetImageURL: assetImageURL,
          companyID: companyData._id,
          userId: "62a26c6090f6bc6e0c75fb36",
        },
        {
          headers: {
            Session: `${cookies.userToken}`,
          },
        }
      )
      .then(() => {
        setLoading(false);
        setIsOpen(false);
        getCompanyAssets();
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  };

  const handleDeleteAsset = async (asset) => {
    await axios
      .delete(
        `${process.env.REACT_APP_ALTOGIC_BASE_URL}/assets/delete/${asset._id}`,
        {
          headers: {
            Session: `${cookies.userToken}`,
          },
        }
      )
      .then(() => getCompanyAssets());
  };

  return (
    <>
      <Header />
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
            onChange={(e) => setAssetName(e.target.value)}
            type="text"
            placeholder="Asset Name"
          />
          <Input
            onChange={(e) => setAssetCategory(e.target.value)}
            type="text"
            placeholder="Asset Category"
          />
          <Input
            onChange={(e) => setAssetImageURL(e.target.value)}
            type="text"
            placeholder="Asset Image URL"
          />
          <Button loading={loading} onClick={handleAddAssets}>
            <h1 className="text-sm font-bold">Add Asset</h1>
          </Button>
        </div>
      </CustomModal>
      <Container>
        <div className="flex">
          <h1 className="font-bold text-2xl">{companyData.companyName}</h1>
          <Button onClick={() => setIsOpen(true)} className="absolute right-64">
            <h1 className="font-bold text-sm">Add Asset</h1>
          </Button>
        </div>
        {assetData.length > 0 ? (
          <div className="flex gap-4">
            <button
              onClick={() => setFilteredCategory("All")}
              className={`${
                filteredCategory == "All"
                  ? "border-2 transition-colors duration-300 hover:border-transparent bg-main hover:text-primary px-4 rounded-lg text-sm font-bold text-primary border-main py-1"
                  : "border-2 transition-colors duration-300 hover:border-transparent hover:bg-main hover:text-primary px-4 rounded-lg text-sm font-bold text-main border-main py-1"
              } `}
            >
              All
            </button>
            {assetData.map((filter, index) => (
              <button
                key={index}
                onClick={() => setFilteredCategory(filter.assetCategory)}
                className={`${
                  filteredCategory == filter.assetCategory
                    ? "border-2 transition-colors duration-300 hover:border-transparent bg-main hover:text-primary px-4 rounded-lg text-sm font-bold text-primary border-main py-1"
                    : "border-2 transition-colors duration-300 hover:border-transparent hover:bg-main hover:text-primary px-4 rounded-lg text-sm font-bold text-main border-main py-1"
                } `}
              >
                {filter.assetCategory}
              </button>
            ))}
          </div>
        ) : null}
        {assetData.length ? (
          <div className="w-3/4 gap-8 grid grid-cols-3">
            {assetData
              .filter(
                (item) =>
                  filteredCategory === "All" ||
                  item.assetCategory === filteredCategory
              )
              .map((card, index) => (
                <div key={index} className="relative">
                  <img
                    src={
                      card.assetImageURL ? card.assetImageURL : NotFoundImage
                    }
                    className="rounded-lg w-[360px] h-[200px] object-cover shadow-lg brightness-75"
                    alt="productImage"
                  />
                  <button
                    onClick={() => handleDeleteAsset(card)}
                    className="w-6 h-6 absolute bottom-5 right-5"
                  >
                    <img
                      alt="garbage"
                      className="transition duration-300 hover:scale-125"
                      src={GarbageImage}
                    />
                  </button>
                  <h1 className="absolute bottom-5 left-5 font-semibold text-primary filter drop-shadow-xl text-sm">
                    {card.assetName}
                    <br />
                    {card.currentUser}
                  </h1>
                </div>
              ))}
          </div>
        ) : (
          <div>
            <h1 className="font-bold text-sm opacity-50">
              No Assets Found For This Company
            </h1>
          </div>
        )}
      </Container>
    </>
  );
};

export default MyCompany;
