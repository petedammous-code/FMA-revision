---
id: rfx-exemple-constante
type: reflexe
situation: Montrer qu'une fonction holomorphe est constante
chapters: [1, 2]
---
## Situation

On a une fonction $f$ holomorphe sur un ouvert $\Omega$, et une information « globale » sur elle : une borne sur $|f|$, une contrainte sur son image (réelle, de module constant, qui évite un ouvert...), un comportement à l'infini, ou une égalité du type $|f(z_0)|=\sup|f|$ en un point intérieur. On veut conclure que $f$ est constante.

## Options

### [x] Théorème de Liouville — [[ch01-liouville]]
**Quand.** $\Omega=\C$ (ou on peut s'y ramener) et $|f|$ bornée, ou plus généralement $|f(z)|=O(|z|^m)$ (alors polynôme).
**Justification.** Estimées de Cauchy à rayon infini.
**Pièges.** Il faut l'holomorphie sur $\C$ **entier** ; sinon penser à composer : si $f$ évite un disque $D(a,r)$, $1/(f-a)$ est bornée.

### [x] Principe du maximum — [[ch01-principe-maximum]]
**Quand.** $\Omega$ connexe et $|f|$ atteint un maximum local en un point intérieur ; ou $|f|$ constante sur $\Omega$.
**Justification.** Propriété de la moyenne : $f(z_0)$ est la moyenne de $f$ sur les petits cercles.
**Pièges.** Pas de conclusion si le max est sur le bord ; $\Omega$ doit être connexe.

### [x] Conditions de Cauchy réelles — [[ch01-cauchy-riemann]]
**Quand.** $f$ est à valeurs réelles, ou $\Re f$ (ou $\Im f$, ou $|f|$) est constante, sur un ouvert connexe.
**Justification.** $\partial P/\partial x=\partial Q/\partial y$, $\partial P/\partial y=-\partial Q/\partial x$ forcent $f'=0$.
**Pièges.** Connexité indispensable pour passer de $f'=0$ à $f$ constante.

### [ ] Théorème de Rouché — [[ch02-rouche]]
**Pourquoi ce n'est pas l'outil ici.** Rouché compte des zéros, il ne donne pas la constance.
**Quand il le serait.** Pour montrer que $f-c$ a autant de zéros qu'une fonction de référence.

## Démarche

1. $\Omega=\C$ et borne sur $|f|$ → Liouville. Croissance polynomiale → polynôme.
2. Information sur l'image (réelle, module constant, dans un cercle, évite un disque) → Cauchy réelles, ou principe du maximum, ou Liouville après composition par une fonction qui rend $f$ bornée ($1/(f-a)$, $e^{f}$, $e^{-if}$...).
3. Max de $|f|$ atteint à l'intérieur d'un connexe → principe du maximum.
4. Toujours vérifier la **connexité** de $\Omega$ avant de conclure « constante » à partir de « localement constante ».

## Pièges

* Conclure « constante » sur un ouvert non connexe : $f$ peut valoir $0$ sur un disque et $1$ sur un autre.
* Appliquer Liouville sur un demi-plan.

## Mini-exemple

$f$ entière avec $\Re f\ge 0$. Alors $g=e^{-f}$ est entière et $|g|=e^{-\Re f}\le1$ : Liouville donne $g$ constante, donc $f'e^{-f}=0$, donc $f'=0$, donc $f$ constante.
