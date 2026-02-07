import campaignBanner from "@/assets/campaign-banner.png";

const CampaignBanner = () => {
  return (
    <div className="px-4 pb-24 pt-4">
      <div className="rounded-2xl overflow-hidden card-shadow">
        <img
          src={campaignBanner}
          alt="Krithika Shivkumar - Modakkurichi Assembly - 17th TN Assembly"
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="text-center mt-3">
        <p className="text-sm font-medium text-primary">17th Tamil Nadu Assembly Elections</p>
        <p className="text-xs text-muted-foreground">Modakkurichi Assembly Constituency</p>
      </div>
    </div>
  );
};

export default CampaignBanner;
