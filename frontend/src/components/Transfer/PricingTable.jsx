import React from "react";
import { Info } from "lucide-react";

const PricingTable = ({ pricing }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Pricing Details</h3>
      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-lg font-semibold">Base Price</div>
          <div className="text-2xl font-bold text-blue-600">
            {pricing.currency}{pricing.basePrice}/{pricing.unit}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 border-b">
            <span>Additional Hours</span>
            <span>{pricing.currency}25/hour</span>
          </div>
          <div className="flex items-center justify-between p-2 border-b">
            <span>Waiting Time</span>
            <span>{pricing.currency}15/hour</span>
          </div>
          <div className="flex items-center justify-between p-2 border-b">
            <span>Child Seat</span>
            <span>{pricing.currency}10/trip</span>
          </div>
        </div>

        <div className="flex items-start gap-2 text-sm text-gray-600">
          <Info className="w-4 h-4 mt-0.5" />
          <p>
            Prices may vary based on season and availability. Contact us for custom
            packages and group discounts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
