// using express-async-handler

// @desc See all goals
// @route GET /api/goals
// @access Private
const getGoals = async (req, res) => {
    res.status(200).json({message: 'get goals'})
}

// @desc Set new goal
// @route POST /api/goals
// @access Private
const setGoal = async (req, res) => {
    if (!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'set goal'})
}

// @desc Update goal by ID
// @route PUT /api/goals/:id
// @access Private
const updateGoal = async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
}

// @desc delete goal by id
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}

module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal
}