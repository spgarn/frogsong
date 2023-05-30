export function getLimitFromWindowWidth(limit){
if(limit >= 2440)return {project:4,news:8}
if(limit < 2440 && limit > 1836)return {project:6,news:12}
if(limit < 1836 && limit > 1231)return {project:4,news:8}
if(limit < 1231)return {project:2,news:4}

}