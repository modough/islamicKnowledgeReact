export const closeThread = async (req, res) => {
    try {
        res.json({ message: 'Thread closed' });
    } catch (error) {
        res.status(500).send(error.message);
    }
}