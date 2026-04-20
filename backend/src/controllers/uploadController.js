const { runReconciliation } = require("../services/pythonService");

exports.uploadFiles = async (req, res) => {
  try {
    const purchaseFile = req.files["purchase"][0].path;
    const gstr2bFile = req.files["gstr2b"][0].path;

    const result = await runReconciliation(purchaseFile, gstr2bFile);

    res.json({
      message: "Reconciliation complete",
      data: result,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// exports.uploadFiles = (req, res) => {
//   try {
//     const purchaseFile = req.files["purchase"][0].path;
//     const gstr2bFile = req.files["gstr2b"][0].path;

//     res.json({
//       message: "Files uploaded successfully",
//       purchaseFile,
//       gstr2bFile,
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };