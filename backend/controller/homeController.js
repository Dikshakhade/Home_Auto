const light = async (req, res) => {
  const { state } = await req.body;
  if (state === 1) {
    res.status(201).json({ state1: "on" });
  } else {
    res.json({ state1: "off" });
  }
};

module.exports = light;
