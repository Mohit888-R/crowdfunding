// components/CampaignCard.js

import Link from 'next/link';

export default function CampaignCard({ campaign }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      {/* <h2>{campaign.title}</h2>
      <p>{campaign.description}</p>
      <p>Target: {campaign.target}</p>
      <p>Amount Collected: {campaign.amountCollected}</p>
      <p>Deadline: {campaign.deadline}</p> */}
      {campaign}
      {/* <Link href={`/${campaign.id}`}>
        <span>View Details</span>
      </Link> */}
    </div>
  );
}
