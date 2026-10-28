---
id: ch08-lagrangien-regulier
type: definition
chapter: 8
title: "Lagrangien régulier : $\frac{\partial^2L}{\partial v^2}(u,q,v)$ non dégénérée en tout point"
ref: "non numéroté, section VIII, p. 145"
page: 145
importance: 2
depends: [ch05-lemme-schwarz, ch05-differentielle-seconde-def, ch05-differentielles-partielles, ch05-isometrie-bilineaire-curryfication]
tags: [lagrangien-regulier, differentielle-seconde, forme-bilineaire, legendre, euler-lagrange]
---
## Intuition

> 💡 L'équation d'Euler-Lagrange est en général une équation du second ordre en $\gamma$, mais **implicite** : si $L$ et $\gamma$ sont $C^2$, elle s'écrit (règle de la chaîne)

$$
\frac{\partial^2L}{\partial v^2}\cdot\gamma''+\frac{\partial^2L}{\partial q\,\partial v}\cdot\gamma'+\frac{\partial^2L}{\partial u\,\partial v}=\frac{\partial L}{\partial q}\qquad\text{(tout évalué en }(t,\gamma,\gamma')\text{)}.
$$

Pour en tirer $\gamma''$ et obtenir une vraie équation différentielle (à laquelle appliquer Cauchy-Lipschitz), il faut pouvoir « diviser » par le coefficient de $\gamma''$, c'est-à-dire que $\frac{\partial^2L}{\partial v^2}$ soit **inversible**. C'est exactement la définition d'un Lagrangien régulier.

Autre lecture : l'**impulsion** $p=\frac{\partial L}{\partial v}(u,q,v)$ est une fonction de la vitesse $v$ ; « régulier » signifie que sa différentielle par rapport à $v$ est inversible en tout point, donc (inversion locale) qu'on peut localement retrouver la vitesse à partir de l'impulsion. En dimension $1$ : $v\mapsto\frac{\partial L}{\partial v}$ a une dérivée $\frac{\partial^2L}{\partial v^2}$ qui ne s'annule pas, donc est strictement monotone.

Notations : $\frac{\partial L}{\partial v}(u,q,v)\in\mathcal L(V;\R)$ est la différentielle partielle de $L$ en $v$ ([[ch05-differentielles-partielles]]) ; $\frac{\partial^2L}{\partial v^2}(u,q,v)$ est la différentielle en $v$ de $v\mapsto\frac{\partial L}{\partial v}(u,q,v)$, élément de $\mathcal L(V;\mathcal L(V;\R))$, identifié à une forme bilinéaire sur $V$ ([[ch05-isometrie-bilineaire-curryfication]], [[ch05-differentielle-seconde-def]]).

## Énoncé

**Définition (poly, non numérotée, section VIII, p. 145).** On suppose le Lagrangien $L$ défini sur $I\times V\times V$ et de classe $C^2$. Pour tout $(u,q,v)\in I\times V\times V$, $\frac{\partial^2L}{\partial v^2}(u,q,v)$ est une forme bilinéaire symétrique sur $V$ :
$$
(\ell_1,\ell_2)\in V\times V\mapsto\frac{\partial^2L}{\partial v^2}(u,q,v)\cdot(\ell_1,\ell_2).
$$
On peut voir
$$
\ell_1\in V\mapsto\frac{\partial^2L}{\partial v^2}(u,q,v)\cdot(\ell_1,\,\cdot\,)
$$
comme une application linéaire de $V$ à valeurs dans $\mathcal L(V;\R)$. On dit que le Lagrangien est **régulier** si, en tout point $(u,q,v)\in I\times V\times V$, cette application linéaire est un isomorphisme de $V$ sur $\mathcal L(V;\R)$.

*Formulations équivalentes.* Comme $\dim V=\dim\mathcal L(V;\R)<\infty$, une application linéaire $V\to\mathcal L(V;\R)$ est un isomorphisme si et seulement si elle est injective. Donc $L$ est régulier si et seulement si, en tout point, la forme bilinéaire symétrique $\frac{\partial^2L}{\partial v^2}(u,q,v)$ est **non dégénérée** : le seul $\ell_1$ tel que $\frac{\partial^2L}{\partial v^2}(u,q,v)\cdot(\ell_1,\ell_2)=0$ pour tout $\ell_2$ est $\ell_1=0$. Dans une base $(e_i)$ de $V$ (orthonormée ou non), cela signifie que la matrice $\Big(\frac{\partial^2L}{\partial v_i\,\partial v_j}(u,q,v)\Big)_{i,j}$ est inversible.

## Hypothèses

### H1 — $L$ de classe $C^2$

**Rôle.** Elle assure que $\frac{\partial^2L}{\partial v^2}$ existe (et dépend continûment de $(u,q,v)$), et que la forme bilinéaire est **symétrique** : c'est le lemme de Schwarz ([[ch05-lemme-schwarz]]) appliqué à $v\mapsto L(u,q,v)$. La continuité sert ensuite à la transformation de Legendre ([[ch08-legendre-inversion-locale]]) via l'inversion locale.

### H2 — Non-dégénérescence en **tout** point

**Rôle.** La condition est imposée en chaque $(u,q,v)$, et pas seulement le long d'une courbe, parce que la courbe solution n'est pas connue à l'avance : c'est ce qui permet d'écrire (E.L) comme un système du premier ordre au voisinage de **n'importe quelle** donnée initiale ([[ch08-systeme-premier-ordre-cauchy-lipschitz]], [[ch08-existence-unicite-locale]]).

## Exemples

* **Mécanique classique.** $L(u,q,v)=\tfrac12\norm v^2-U(q)$. Alors $\frac{\partial L}{\partial v}(u,q,v)=\langle v,\cdot\rangle$ et $\frac{\partial^2L}{\partial v^2}(u,q,v)\cdot(\ell_1,\ell_2)=\langle\ell_1,\ell_2\rangle$ : c'est le produit scalaire, non dégénéré. $L$ est régulier (si $U$ est $C^2$) ; l'application $\ell_1\mapsto\langle\ell_1,\cdot\rangle$ est l'identification de Riesz $V\simeq\mathcal L(V;\R)$. Plus généralement $L=\tfrac12\langle M(q)v,v\rangle-U(q)$, avec $M(q)$ symétrique, a $\frac{\partial^2L}{\partial v^2}=\langle M(q)\cdot,\cdot\rangle$ : régulier si et seulement si $M(q)$ est inversible pour tout $q$. En coordonnées polaires, $L_1=\tfrac12(\dot r^2+r^2\dot\theta^2)-W(r)$ ([[ch08-changement-de-variables]]) donne $M=\mathrm{diag}(1,r^2)$ : non dégénérée exactement là où $r\ne0$.
* **Particule relativiste** ($V=\R$, vitesses $\abs v<1$). $L(u,q,v)=-\sqrt{1-v^2}$ : $\frac{\partial L}{\partial v}=\frac{v}{\sqrt{1-v^2}}$ et $\frac{\partial^2L}{\partial v^2}=\frac1{\sqrt{1-v^2}}+\frac{v^2}{(1-v^2)^{3/2}}=\frac1{(1-v^2)^{3/2}}>0$ : régulier (sur son domaine). L'impulsion $p=\frac{v}{\sqrt{1-v^2}}$ est strictement croissante de $]-1,1[$ sur $\R$, d'inverse $v=\frac p{\sqrt{1+p^2}}$.
* **Un Lagrangien non régulier : $L$ affine en $v$.** $V=\R$, $L(u,q,v)=qv-\tfrac12q^2$. Alors $\frac{\partial^2L}{\partial v^2}=0$ partout. (E.L) : $\frac{\partial L}{\partial v}=q$ et $\frac{\partial L}{\partial q}=v-q$, donc $\frac{d}{dt}\gamma(t)=\gamma'(t)-\gamma(t)$, soit $\gamma\equiv0$ : l'équation n'est plus différentielle du tout, et le problème « $\gamma(t_0)=q_0$, $\gamma'(t_0)=v_0$ » n'a aucune solution dès que $(q_0,v_0)\ne(0,0)$.
* **Longueur.** $L(u,q,v)=\norm v$ sur $V\setminus\{0\}$ (en $v$). Ici $\frac{\partial L}{\partial v}=\big\langle\frac v{\norm v},\cdot\big\rangle$ et $\frac{\partial^2L}{\partial v^2}(\ell_1,\ell_2)=\frac{\langle\ell_1,\ell_2\rangle}{\norm v}-\frac{\langle v,\ell_1\rangle\langle v,\ell_2\rangle}{\norm v^3}$, qui s'annule pour $\ell_1=v$ et tout $\ell_2$ : forme **dégénérée** (dans la direction de $v$). C'est lié au fait que la longueur ne dépend pas du paramétrage (homogénéité de degré $1$ en $v$) : (E.L) ne peut pas déterminer la vitesse de parcours.

## Pièges

* > ⚠️ « Régulier » est une condition sur la dérivée seconde **en $v$ uniquement** ($\frac{\partial^2L}{\partial v^2}$), pas sur la hessienne complète de $L$ en $(u,q,v)$, et pas une condition de signe : une forme non dégénérée peut être indéfinie (par exemple $\tfrac12(v_1^2-v_2^2)$ est régulier).
* Ne pas confondre « régulier » avec « de classe $C^2$ » : $L=qv-\tfrac12q^2$ est $C^\infty$ mais pas régulier.
* La non-dégénérescence doit avoir lieu en **tout** point : $L=\tfrac14v^4$ ($V=\R$) n'est pas régulier car $\frac{\partial^2L}{\partial v^2}=3v^2$ s'annule en $v=0$. (Cela n'empêche pas forcément l'unicité pour (E.L) : ici $(\gamma'^3)'=0$ donne $\gamma'$ constant. La régularité est une condition **suffisante** pour appliquer Cauchy-Lipschitz, pas nécessaire.)
* $\frac{\partial^2L}{\partial v^2}(u,q,v)\cdot(\ell_1,\cdot)$ est une forme linéaire ; l'isomorphisme va de $V$ dans le **dual** $\mathcal L(V;\R)$, qu'on peut ensuite identifier à $V$ par le produit scalaire.
