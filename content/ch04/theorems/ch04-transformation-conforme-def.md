---
id: ch04-transformation-conforme-def
type: definition
chapter: 4
title: Transformation conforme (conservation des angles)
ref: non numéroté, section IV.1, p. 75 (définition « transformation conforme »)
page: 75
importance: 2
depends: [ch01-similitude-conforme, ch01-c-derivable-ssi-df-c-lineaire]
tags: [conforme, angles, arcs, tangente, similitude]
---
## Intuition

> 💡 Regardez une carte du monde en projection de Mercator : les **formes** des petits pays sont correctes (un carrefour à angle droit reste à angle droit) alors que les **tailles** sont fausses (le Groenland paraît énorme). C'est exactement ce que fait une fonction holomorphe $f$ au voisinage d'un point $z_0$ où $f'(z_0)\neq0$ : elle dilate tout d'un facteur $|f'(z_0)|$ et tourne tout d'un angle $\arg f'(z_0)$, donc elle **conserve les angles** entre les courbes qui se croisent en $z_0$, sans conserver les longueurs.

La raison est déjà dans la Remarque I.2.5 du poly ([[ch01-similitude-conforme]]) : la différentielle réelle $df_{z_0}$ d'une fonction holomorphe est la multiplication par le nombre complexe $f'(z_0)$ ([[ch01-c-derivable-ssi-df-c-lineaire]]), c'est-à-dire une **similitude directe** du plan (homothétie de rapport $|f'(z_0)|$ composée avec la rotation d'angle $\arg f'(z_0)$). Une similitude directe envoie deux vecteurs faisant un angle $\theta$ sur deux vecteurs faisant le même angle $\theta$. Le paragraphe IV.1 donne un nom à cette propriété : une fonction holomorphe à dérivée non nulle est une **transformation conforme**.

Pour parler d'angle entre deux **courbes**, on les paramètre par des arcs $\gamma_j$ de classe $C^1$ et l'on regarde l'angle entre leurs **vecteurs tangents** $\gamma_j'(0)$ au point de croisement ; il faut pour cela que ces vecteurs soient non nuls (arcs **réguliers**).

## Énoncé

*Rappels préliminaires.* Pour deux vecteurs non nuls $u,v\in\C\simeq\R^2$, l'**angle orienté** de $u$ vers $v$ est l'argument de leur quotient,
$$
\angle(u,v) := \arg\frac{v}{u}\in\R/2\pi\Z,
$$
c'est-à-dire l'unique $\theta$ modulo $2\pi$ tel que $\dfrac{v}{|v|} = e^{i\theta}\,\dfrac{u}{|u|}$. Les vecteurs $u$ et $v$ sont **orthogonaux** lorsque $\angle(u,v)=\pm\pi/2$, c'est-à-dire $v/u\in i\R$, ou encore $\Re(\bar u\,v)=0$ (produit scalaire nul).

Un **arc de classe $C^1$** est une application $\gamma : ]-1,1[\to\C$ de classe $C^1$ ; le vecteur $\gamma'(0)$ est le **vecteur tangent** à l'arc au point $\gamma(0)$. L'arc est dit **régulier** au voisinage de $t=0$ si $\gamma'(0)\neq0$ (par continuité de $\gamma'$, on a alors $\gamma'(t)\neq0$ pour $|t|$ assez petit).

**Définition (poly, section IV.1, p. 75).** Soient $f\in\Hol(\Omega)$ et $z_0\in\Omega$ tel que $f'(z_0)\neq0$. Soient $\gamma_1,\gamma_2 : ]-1,1[\to\C$ deux arcs de classe $C^1$ qui passent par $z_0$ quand $t=0$ (c'est-à-dire $\gamma_1(0)=\gamma_2(0)=z_0$), réguliers au voisinage de $t=0$ ($\gamma_j'(0)\neq0$). On dit que $f$ **conserve les angles en $z_0$** si, pour tout couple d'arcs de ce type, l'angle orienté entre les tangentes $\gamma_1'(0)$ et $\gamma_2'(0)$ en $z_0$ est égal à l'angle orienté entre les tangentes $(f\circ\gamma_1)'(0)$ et $(f\circ\gamma_2)'(0)$ aux arcs images en $f(z_0)$ :
$$
\angle\big((f\circ\gamma_1)'(0),\,(f\circ\gamma_2)'(0)\big) = \angle\big(\gamma_1'(0),\,\gamma_2'(0)\big).
$$
Les fonctions holomorphes conservent les angles en tout point où leur dérivée ne s'annule pas ([[ch04-holomorphe-conserve-angles]]) ; on fait référence à cette propriété de conservation des angles en disant que **les fonctions holomorphes (à dérivée non nulle) sont des transformations conformes**. On dit aussi que $f$ est **conforme en $z_0$** (Remarque I.2.5, p. 8, [[ch01-similitude-conforme]]).

*Deux usages du mot dans le poly.* Au § III.4, « transformation conforme » désigne aussi une application **biholomorphe** $\Omega\to D$ (théorème de représentation conforme de Riemann), et l'on dit alors que $\Omega$ est « conformément équivalent » au disque $D$. Une telle application est en particulier conforme en tout point au sens ci-dessus : si $\varphi$ est biholomorphe, $\varphi^{-1}\circ\varphi=\mathrm{id}$ donne $(\varphi^{-1})'(\varphi(z))\,\varphi'(z)=1$, donc $\varphi'(z)\neq0$ partout. Dans tout le chapitre IV, le sens est celui de la définition locale ci-dessus.

## Hypothèses

La définition contient trois conditions « cachées » sans lesquelles elle n'a pas de sens.

### H1 — $f'(z_0)\neq0$

**Rôle.** La tangente à l'arc image est $(f\circ\gamma_j)'(0)=f'(z_0)\,\gamma_j'(0)$ ([[ch04-holomorphe-conserve-angles]]) : si $f'(z_0)=0$, elle est nulle et l'angle entre les arcs images n'est pas défini. Les zéros de $f'$ sont isolés dès que $f$ n'est pas localement constante ([[ch04-zeros-derivee-isoles]]), donc la condition exclut peu de points.

**Si on la retire.** $f(z)=z^2$ en $z_0=0$ : les demi-axes $\R_+$ et $i\R_+$ (tangentes $1$ et $i$, angle $\pi/2$) ont pour images $\R_+$ et $\R_-$ (car $(it)^2=-t^2$), qui font un angle $\pi$ : les angles sont **doublés**. Plus généralement, $z\mapsto z^n$ multiplie par $n$ les angles en $0$ (la demi-droite d'angle $\theta$ est envoyée sur la demi-droite d'angle $n\theta$). Une fonction holomorphe n'est donc pas conforme en un zéro de sa dérivée.

### H2 — Arcs de classe $C^1$ et réguliers ($\gamma_j'(0)\neq0$)

**Rôle.** L'angle entre deux courbes est défini comme l'angle entre leurs vecteurs tangents : il faut que ces vecteurs existent (classe $C^1$) et soient non nuls (régularité), sinon $\arg\big(\gamma_2'(0)/\gamma_1'(0)\big)$ n'a pas de sens.

**Si on la retire.** $\gamma(t)=t^3$ est $C^1$ (même $C^\infty$), injectif, de trace la droite réelle, mais $\gamma'(0)=0$ : le vecteur tangent est nul et la formule ne définit aucun angle, bien que la courbe géométrique ait une tangente évidente. Et $\gamma(t)=t+i|t|$ est continu mais pas dérivable en $0$ (coin) : pas de tangente du tout. La régularité est donc une hypothèse de **définition**, pas une restriction géométrique : on reparamètre toujours une courbe lisse par un arc régulier.

### H3 — $f$ holomorphe (et pas seulement différentiable)

**Rôle.** C'est l'holomorphie qui rend $df_{z_0}$ $\C$-linéaire, donc égale à une similitude directe ([[ch01-c-derivable-ssi-df-c-lineaire]], [[ch01-similitude-conforme]]) ; une application $\R$-linéaire inversible quelconque déforme les angles.

**Si on la retire.** $F(x+iy)=x+2iy$ est $C^\infty$, de différentielle inversible, mais non holomorphe ($\partial F/\partial\bar z = \tfrac12(1+i\cdot 2i)=-\tfrac12\neq0$). Les tangentes $1$ et $1+i$ (angle $\pi/4$) sont envoyées sur $1$ et $1+2i$, d'angle $\arctan 2\neq\pi/4$. Autre exemple : $F(z)=\bar z$ envoie l'angle orienté $\angle(u,v)$ sur $\angle(\bar u,\bar v)=\arg(\bar v/\bar u)=-\angle(u,v)$ : les angles **non orientés** sont conservés mais l'orientation est renversée (similitude indirecte, $\det J_F=-1$) ; ce n'est pas une transformation conforme au sens du poly.

## Exemples

* **$f(z)=e^z$ en $z_0=0$.** $f'(0)=1\neq0$. Les arcs $\gamma_1(t)=t$ (axe réel, tangente $1$) et $\gamma_2(t)=it$ (axe imaginaire, tangente $i$) font un angle $\pi/2$. Leurs images sont $t\mapsto e^t$ (demi-droite $\R_+^*$, tangente $e^0=1$) et $t\mapsto e^{it}$ (cercle unité, tangente $ie^{0}=i$) : angle $\pi/2$ en $f(0)=1$. Plus généralement, $\exp$ envoie le grillage des droites $x=c$, $y=c'$ sur les cercles $|w|=e^c$ et les demi-droites $\arg w=c'$, qui se coupent à angle droit : $\exp$ est conforme en tout point puisque $f'=f$ ne s'annule jamais.
* **$f(z)=z^2$ en $z_0=1$.** $f'(1)=2\neq0$. Les arcs $\gamma_1(t)=1+t$ et $\gamma_2(t)=1+it$ ont pour tangentes $1$ et $i$. Les images $(1+t)^2=1+2t+t^2$ et $(1+it)^2=1-t^2+2it$ ont pour tangentes en $t=0$ les vecteurs $2$ et $2i$, c'est-à-dire $f'(1)\cdot1$ et $f'(1)\cdot i$. L'angle $\pi/2$ est conservé, les longueurs des tangentes sont multipliées par $|f'(1)|=2$.
* **Le même $f(z)=z^2$ en $z_0=0$** n'est pas conforme (voir H1). La conformité est une propriété **ponctuelle**, à vérifier en chaque point : $z^2$ est conforme sur $\C^*$ et pas en $0$.

## Pièges

* > ⚠️ « Conforme » ne veut pas dire « isométrique » : les longueurs sont multipliées par $|f'(z_0)|$, qui varie d'un point à l'autre. Seuls les angles (et donc les formes infinitésimales) sont conservés.
* Les angles conservés sont les angles **orientés** : $z\mapsto\bar z$ conserve les angles non orientés mais n'est pas conforme au sens du poly (elle renverse l'orientation) ; une fonction holomorphe a un déterminant jacobien $|f'(z)|^2>0$ et préserve l'orientation ([[ch01-similitude-conforme]]).
* L'hypothèse $f'(z_0)\neq0$ est indispensable ($z^2$ en $0$ double les angles) ; elle n'est pas automatique, mais ne manque qu'en des points isolés si $f$ n'est pas localement constante ([[ch04-zeros-derivee-isoles]]).
* « Régulier » signifie $\gamma'(0)\neq0$, pas seulement « $C^1$ » ni « injectif » : $t\mapsto t^3$ est $C^1$ et injectif mais non régulier en $0$.
* Ne pas confondre les deux usages de « transformation conforme » : propriété **locale** (ce chapitre) et **biholomorphisme** $\Omega\to D$ (§ III.4, Riemann). Le second implique le premier, pas l'inverse : $\exp$ est conforme en tout point de $\C$ mais n'est injective sur aucun ouvert contenant deux points qui différent de $2i\pi$.
