import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Complaint = sequelize.define('Complaint', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  citizenId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  category: {
    type: DataTypes.ENUM('Road Issue', 'Water Problem', 'Electricity', 'Harassment', 'Fraud', 'Other'),
    allowNull: false,
  },
  priority: {
    type: DataTypes.ENUM('Emergency', 'High', 'Normal', 'Low'),
    defaultValue: 'Normal',
  },
  status: {
    type: DataTypes.ENUM('Submitted', 'Assigned', 'Under Review', 'Resolved', 'Closed'),
    defaultValue: 'Submitted',
  },
  location: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  attachments: {
    type: DataTypes.JSON,
    defaultValue: [],
  },
  assignedOfficerId: {
    type: DataTypes.UUID,
    allowNull: true,
  },
  departmentId: {
    type: DataTypes.UUID,
    allowNull: true,
  },
  resolutionNotes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  resolvedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'complaints',
  timestamps: true,
});

export default Complaint;
