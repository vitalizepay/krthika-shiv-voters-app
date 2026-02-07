import campaignBanner from "@/assets/campaign-banner.jpg";

const CampaignBanner = () => {
  return (
    <div className="px-4 pb-24 pt-4">
      <div className="rounded-2xl overflow-hidden card-shadow">
        <img
          src={campaignBanner}
          alt="Campaign Banner"
          className="w-full h-48 object-cover"
        />
      </div>
    </div>
  );
};

export default CampaignBanner;
