export default {
    style: `
      #layer {
        marker-width: 5;
        marker-fill-opacity: 0.7;
        marker-allow-overlap: true;
        marker-line-width: 0;
        marker-comp-op: multiply;
      }
    `,

    source: `
SELECT *  from opendata_public_reports 
    `,
};
