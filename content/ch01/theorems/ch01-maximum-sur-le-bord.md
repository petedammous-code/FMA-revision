---
id: ch01-maximum-sur-le-bord
type: corollary
chapter: 1
title: "Sur un connexe borné : $\sup_{\bar\Omega}|f|=\sup_{\partial\Omega}|f|$ pour $f$ continue sur $\bar\Omega$, holomorphe sur $\Omega$"
ref: Corollaire I.12.2
page: 31
importance: 3
depends: [ch01-principe-maximum]
tags: [principe-maximum, bord, compacite, adherence, estimation]
---
## Intuition

> 💡 Si l'on tend une membrane élastique (le graphe de $|f|$) au-dessus d'un domaine borné, elle ne peut pas former de bosse à l'intérieur : son point le plus haut est sur le **cadre**, c'est-à-dire sur le bord du domaine. Pour majorer une fonction holomorphe dans tout un domaine borné, il suffit donc de la majorer **sur le bord**.

C'est la forme sous laquelle on utilise le plus souvent le principe du maximum ([[ch01-principe-maximum]]) : on sait par compacité que $|f|$ atteint son maximum quelque part sur $\bar\Omega$ ; si c'était à l'intérieur, $f$ serait constante — et alors le maximum est aussi atteint sur le bord.

Notations : $\bar\Omega$ est l'**adhérence** de $\Omega$ (ensemble des limites de suites de points de $\Omega$) ; le **bord** de l'ouvert $\Omega$ est $\partial\Omega:=\bar\Omega\setminus\Omega$. Une partie de $\C$ est **compacte** si elle est fermée et bornée.

## Énoncé

**Corollaire (poly, Corollaire I.12.2, p. 31).** Soit $\Omega$ un ouvert connexe non vide de $\C$ et supposons que son adhérence $\bar\Omega$ soit bornée, donc compacte. Soit $f:\bar\Omega\to\C$ continue et holomorphe sur $\Omega$. On a alors $\sup_{\bar\Omega}|f|<+\infty$ par compacité de $\bar\Omega$ (et de plus ce sup est atteint). Le principe du maximum implique que ce sup est atteint sur le bord du domaine $\partial\Omega=\bar\Omega\setminus\Omega$ :
$$
\sup_{\bar\Omega}|f|=\sup_{\partial\Omega}|f| .
$$
Autrement dit : pour tout $z\in\bar\Omega$, $|f(z)|\le\max_{\partial\Omega}|f|$.

## Hypothèses

### H1 — $\bar\Omega$ bornée

**Rôle.** Elle donne la compacité de $\bar\Omega$, donc l'existence d'un point $z_1\in\bar\Omega$ où $|f|$ atteint son sup ; elle garantit aussi que $\partial\Omega\neq\emptyset$.

**Si on la retire.** Sur le demi-plan $\Omega=\{z:\Im z>0\}$ (connexe, non borné), $f(z)=e^{-iz}$ est entière, donc continue sur $\bar\Omega=\{\Im z\ge0\}$ et holomorphe sur $\Omega$. Pour $z=x+iy$, $-iz=y-ix$, donc $|f(z)|=e^{y}=e^{\Im z}$ : on a $|f|=1$ sur $\partial\Omega=\R$, mais $\sup_{\bar\Omega}|f|=+\infty$. Plus simplement : $f(z)=z$ sur $\Omega=\{|z|>1\}$ vaut $1$ en module sur le bord $C(0,1)$ et n'est pas bornée. (Sur des domaines non bornés, il faut des hypothèses de croissance : théorème de Phragmén–Lindelöf, hors programme.)

### H2 — $f$ continue sur $\bar\Omega$

**Rôle.** Elle donne un sens à $\sup_{\partial\Omega}|f|$ et permet d'utiliser la compacité de $\bar\Omega$ (une fonction continue sur un compact est bornée et atteint ses bornes).

**Si on la retire.** $f(z)=\exp\Big(\dfrac{1+z}{1-z}\Big)$ est holomorphe sur $\Omega=D(0,1)$ et se prolonge continûment à $\bar D(0,1)\setminus\{1\}$. Comme $\Re\dfrac{1+z}{1-z}=\dfrac{\Re\big((1+z)(1-\bar z)\big)}{|1-z|^2}=\dfrac{1-|z|^2}{|1-z|^2}$, on a $|f|=1$ sur $C(0,1)\setminus\{1\}$, alors que $|f|>1$ dans $D(0,1)$ et $f(x)=e^{(1+x)/(1-x)}\to+\infty$ quand $x\to1^-$. Un seul point du bord où $f$ n'est pas continue suffit à ruiner la conclusion.

### H3 — $f$ holomorphe sur $\Omega$

**Rôle.** C'est elle qui permet d'appliquer le principe du maximum en un point intérieur.

**Si on la retire.** $f(z)=1-|z|^2$ sur $\bar D(0,1)$ est continue, $\sup_{\bar D}|f|=1$ (atteint en $0$) mais $f=0$ sur le cercle : $\sup_{\partial D}|f|=0<1$.

### H4 — $\Omega$ connexe non vide

**Rôle.** « Non vide » est nécessaire pour que les sup aient un sens. La connexité sert à appliquer le principe du maximum tel qu'il est énoncé.

**Si on la retire.** Pour la connexité, la conclusion **reste vraie** mais la preuve change : si $|f|$ est maximal en $z_1\in\Omega$, soit $U$ la composante connexe de $\Omega$ contenant $z_1$ (un ouvert borné non vide) ; $f$ est constante sur $U$ ([[ch01-principe-maximum]] appliqué sur $U$), donc sur $\bar U$ par continuité, et $\partial U\neq\emptyset$. Enfin $\partial U\subset\partial\Omega$ : si $x\in\partial U$ était dans $\Omega$, sa composante connexe $V$ (ouverte) rencontrerait $U$ puisque $x\in\bar U$, donc $V=U$ et $x\in U$, absurde ($U$ ouvert, $x\notin U$). D'où $|f(z_1)|=|f(x)|\le\sup_{\partial\Omega}|f|$ pour $x\in\partial U$. C'est une hypothèse de confort.

## Idée de la preuve

Par compacité, $|f|$ atteint son maximum en un $z_1\in\bar\Omega$. Si $z_1\in\partial\Omega$, c'est fini ; si $z_1\in\Omega$, le principe du maximum rend $f$ constante sur $\Omega$, donc sur $\bar\Omega$, et le maximum est aussi atteint sur le bord (non vide).

## Preuve

**Compacité.** $\bar\Omega$ est fermée et bornée, donc compacte ; $|f|$ est continue sur $\bar\Omega$, donc bornée et atteint son maximum en un point $z_1\in\bar\Omega$ : $|f(z_1)|=\sup_{\bar\Omega}|f|<+\infty$.

**Le bord est non vide.** Si $\partial\Omega=\emptyset$, alors $\bar\Omega=\Omega$ : $\Omega$ serait à la fois ouvert et fermé dans $\C$, non vide, et différent de $\C$ (car borné). Comme $\C$ est connexe, c'est impossible. Donc $\partial\Omega\neq\emptyset$ ; comme $\partial\Omega=\bar\Omega\cap(\C\setminus\Omega)$ est fermé et borné, $\sup_{\partial\Omega}|f|$ est fini et atteint.

**Inégalité facile.** $\partial\Omega\subset\bar\Omega$, donc $\sup_{\partial\Omega}|f|\le\sup_{\bar\Omega}|f|$.

**Inégalité principale.** Deux cas.
* Si $z_1\in\partial\Omega$ : $\sup_{\bar\Omega}|f|=|f(z_1)|\le\sup_{\partial\Omega}|f|$.
* Si $z_1\in\Omega$ : pour tout $z\in\Omega$, $|f(z)|\le|f(z_1)|$, donc $|f|_{|\Omega}$ admet un maximum (global, a fortiori local) en $z_1$. Le principe du maximum ([[ch01-principe-maximum]]), appliqué à $f\in\Hol(\Omega)$ sur l'ouvert connexe $\Omega$, donne : $f$ est constante sur $\Omega$, égale à $c:=f(z_1)$. Tout point de $\bar\Omega$ est limite d'une suite de points de $\Omega$, et $f$ est continue sur $\bar\Omega$ : donc $f=c$ sur $\bar\Omega$. En prenant $w\in\partial\Omega\neq\emptyset$, $\sup_{\bar\Omega}|f|=|c|=|f(w)|\le\sup_{\partial\Omega}|f|$.

Dans les deux cas, $\sup_{\bar\Omega}|f|=\sup_{\partial\Omega}|f|$. $\square$

## Preuve à trous

Comme $\bar\Omega$ est <trou indice="fermé + borné dans $\C$">compacte</trou> et $|f|$ continue, il existe $z_1\in\bar\Omega$ avec $|f(z_1)|=\sup_{\bar\Omega}|f|$. De plus $\partial\Omega\neq\emptyset$, car sinon <trou indice="utiliser la connexité de $\C$">$\Omega=\bar\Omega$ serait ouvert, fermé, non vide et $\neq\C$ (borné), ce qui contredit la connexité de $\C$</trou>. Si $z_1\in\partial\Omega$, c'est fini. Si $z_1\in\Omega$, alors <trou indice="quel théorème, appliqué où ?">$|f|$ a un maximum local en le point intérieur $z_1$ de l'ouvert connexe $\Omega$, donc $f$ est constante sur $\Omega$ par le principe du maximum</trou>, puis <trou>constante sur $\bar\Omega$ par continuité</trou>, et le maximum est aussi atteint en tout point de $\partial\Omega$. Comme toujours $\sup_{\partial\Omega}|f|\le\sup_{\bar\Omega}|f|$, on a l'égalité. $\square$

## Exemples

* **Un polynôme sur le disque unité.** $P(z)=z^2-2$ sur $\bar D(0,1)$. Sur le cercle, $|P(e^{i\theta})|=|e^{2i\theta}-2|$ est maximal quand $e^{2i\theta}=-1$, c'est-à-dire en $z=\pm i$ : $\max_{\bar D}|P|=|-1-2|=3$. À l'intérieur, par exemple $|P(0)|=2<3$, comme prévu.
* **Unicité d'un problème au bord.** Si $f,g:\bar\Omega\to\C$ sont continues, holomorphes sur $\Omega$ (connexe, borné) et $f=g$ sur $\partial\Omega$, alors $f=g$ sur $\bar\Omega$ : appliquer le corollaire à $f-g$, d'où $\sup_{\bar\Omega}|f-g|=\sup_{\partial\Omega}|f-g|=0$. Une fonction holomorphe est **déterminée par ses valeurs au bord** (comparer avec [[ch04-maximum-unicite-bord]]).
* **Vers le lemme de Schwarz.** Si $f\in\Hol(D(0,1))$, continue sur $\bar D(0,1)$, vérifie $|f|\le1$ sur le cercle unité, alors $|f(z)|\le1$ pour tout $|z|\le1$. Si de plus $f(0)=0$, on applique le même raisonnement à $f(z)/z$ (prolongée par $f'(0)$ en $0$) sur $\bar D(0,r)$, $r<1$ : $|f(z)/z|\le\max_{|w|=r}|f(w)|/r\le1/r$, et en faisant $r\to1$ : $|f(z)|\le|z|$. C'est le cœur du [[ch01-lemme-schwarz]].

## Pièges

* > ⚠️ Le domaine doit être **borné** : sur un demi-plan ou l'extérieur d'un disque, la conclusion est fausse ($e^{-iz}$, $z$).
* > ⚠️ $f$ doit être **continue jusqu'au bord** : un seul point de discontinuité au bord peut tout casser ($\exp\frac{1+z}{1-z}$).
* Le bord est $\partial\Omega=\bar\Omega\setminus\Omega$, et non $\partial\bar\Omega$ : pour $\Omega=D(0,1)\setminus\{0\}$, $\partial\Omega=C(0,1)\cup\{0\}$ contient le point $0$.
* Ce résultat ne dit **pas** que le maximum n'est atteint **que** sur le bord : il peut l'être aussi à l'intérieur, mais seulement si $f$ est constante.
* Version « minimum » : si de plus $f$ ne s'annule pas sur $\Omega$, alors $\min_{\bar\Omega}|f|=\min_{\partial\Omega}|f|$ (même preuve avec $1/f$ sur $\Omega$) ; sans cette hypothèse, c'est faux ($f(z)=z$ sur $\bar D(0,1)$ : minimum $0$ en $0$, mais $|f|=1$ sur le bord).
