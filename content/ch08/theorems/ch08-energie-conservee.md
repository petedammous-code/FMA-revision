---
id: ch08-energie-conservee
type: proposition
chapter: 8
title: "Lagrangien autonome : conservation de l'énergie $H=\frac{\partial L}{\partial v}\cdot\gamma'-L$"
ref: "Question 6, p. 144 (non numérotée, section VIII)"
page: 144
importance: 2
depends: [ch08-euler-lagrange, ch05-composition-differentielles, ch05-differentielles-partielles, ch05-formule-leibniz, ch05-differentielle-nulle-constante]
tags: [energie, quantite-conservee, lagrangien-autonome, euler-lagrange, integrale-premiere]
---
## Intuition

> 💡 Quand la règle de coût $L$ ne dépend pas de l'heure (Lagrangien **autonome**), les lois du mouvement sont les mêmes à tout instant ; cette invariance par translation dans le temps se paie par une quantité conservée le long de toute solution : l'**énergie** $H=\frac{\partial L}{\partial v}\cdot v-L$, évaluée en $(q,v)=(\gamma(t),\gamma'(t))$. Pour $L=\frac12\norm v^2-U(q)$, on trouve $H=\frac12\norm{\gamma'}^2+U(\gamma)$ : énergie cinétique plus énergie potentielle.

C'est le cas « symétrie par translation en temps » du théorème de Noether ([[ch08-noether]], qui ne traite dans le poly que des symétries en $q$). En pratique, $H$ est une **intégrale première** : une équation du premier ordre qui remplace l'équation d'Euler-Lagrange du second ordre et permet souvent de résoudre ou d'analyser le mouvement (portrait de phase : les trajectoires sont dans les lignes de niveau de $H$).

Notations : $\frac{\partial L}{\partial v}(q,v)\in L(V;\R)$ est la différentielle partielle de $L$ par rapport à $v$ ([[ch05-differentielles-partielles]]) ; le point « $\cdot$ » désigne l'application de cette forme linéaire à un vecteur : $\frac{\partial L}{\partial v}(q,v)\cdot w=\big\langle\frac{\partial L}{\partial v}(q,v),w\big\rangle$ après identification $L(V;\R)\simeq V$. L'équation d'Euler-Lagrange (E.L) est celle de [[ch08-euler-lagrange]].

## Énoncé

**Proposition (poly, Question 6, p. 144).** Soit $L:I\times V\times V\to\R$ de classe $C^1$ ne dépendant pas de la première variable $u$ ; on écrit $L(q,v)$. Si $\gamma:[0;1]\to V$ est une solution de l'équation d'Euler-Lagrange
$$
\frac{d}{dt}\Big(t\mapsto\frac{\partial L}{\partial v}\big(\gamma(t),\gamma'(t)\big)\Big)=\frac{\partial L}{\partial q}\big(\gamma(t),\gamma'(t)\big)\qquad(t\in[0;1])
$$
de classe $C^2$, alors la fonction
$$
H(t)=\frac{\partial L}{\partial v}\big(\gamma(t),\gamma'(t)\big)\cdot\gamma'(t)-L\big(\gamma(t),\gamma'(t)\big)
$$
est constante sur $[0;1]$.

## Hypothèses

### H1 — $L$ ne dépend pas de $u$ (Lagrangien autonome)

**Rôle.** Dans la dérivée de $t\mapsto L(t,\gamma(t),\gamma'(t))$, il n'y a pas de terme $\frac{\partial L}{\partial u}$ ; les autres termes se compensent exactement grâce à (E.L).

**Si on la retire.** Le même calcul donne en général $H'(t)=-\frac{\partial L}{\partial u}\big(t,\gamma(t),\gamma'(t)\big)$, non nul. Exemple vérifié : $V=\R$, $L(u,q,v)=\frac12e^uv^2$. On a $\frac{\partial L}{\partial v}=e^uv$, $\frac{\partial L}{\partial q}=0$, et (E.L) s'écrit $\frac{d}{dt}\big(e^t\gamma'(t)\big)=0$ ; $\gamma(t)=1-e^{-t}$ en est une solution $C^\infty$ ($e^t\gamma'(t)=1$). Alors $H(t)=e^t\gamma'(t)^2-\frac12e^t\gamma'(t)^2=\frac12e^t\gamma'(t)^2=\frac12e^{-t}$, qui n'est pas constante ; et l'on a bien $H'(t)=-\frac12e^{-t}=-\frac{\partial L}{\partial u}(t,\gamma,\gamma')$. (Physiquement : un frottement, l'énergie se dissipe.)

### H2 — $\gamma$ est de classe $C^2$

**Rôle.** Pour dériver $H$, il faut dériver $t\mapsto\gamma'(t)$, qui apparaît dans $\frac{\partial L}{\partial v}(\gamma,\gamma')\cdot\gamma'$ et dans $L(\gamma,\gamma')$.

**Si on la retire.** Pour un Lagrangien de classe $C^2$ **régulier** ($\frac{\partial^2L}{\partial v^2}$ non dégénérée, [[ch08-lagrangien-regulier]]), c'est une hypothèse de confort : toute solution $C^1$ de (E.L) est automatiquement $C^2$ ([[ch08-systeme-premier-ordre-cauchy-lipschitz]]), et la conclusion reste donc vraie. Pour un Lagrangien seulement $C^1$, la preuve ci-dessous ne s'applique plus (on ne peut pas dériver $\gamma'$) et nous n'affirmons rien sans cette hypothèse.

### H3 — $\gamma$ vérifie (E.L)

**Rôle.** (E.L) dit exactement que $t\mapsto\frac{\partial L}{\partial v}(\gamma,\gamma')$ a pour dérivée $\frac{\partial L}{\partial q}(\gamma,\gamma')$, ce qui fait disparaître le terme en $\gamma'$ dans $H'$.

**Si on la retire.** $V=\R$, $L=\frac12v^2$ (autonome), $\gamma(t)=t^2$ : (E.L) demanderait $\gamma''=0$, faux. Et $H(t)=\gamma'(t)\cdot\gamma'(t)-\frac12\gamma'(t)^2=\frac12\gamma'(t)^2=2t^2$ n'est pas constante.

## Idée de la preuve

On dérive $H$ : la règle de la chaîne donne $\frac{d}{dt}L(\gamma,\gamma')=\frac{\partial L}{\partial q}\cdot\gamma'+\frac{\partial L}{\partial v}\cdot\gamma''$, et Leibniz donne $\frac{d}{dt}\big(\frac{\partial L}{\partial v}\cdot\gamma'\big)=\big(\frac{d}{dt}\frac{\partial L}{\partial v}\big)\cdot\gamma'+\frac{\partial L}{\partial v}\cdot\gamma''$. Par (E.L), $\frac{d}{dt}\frac{\partial L}{\partial v}=\frac{\partial L}{\partial q}$, et tout se simplifie : $H'=0$.

## Preuve

Posons, pour $t\in[0;1]$, $A(t)=\frac{\partial L}{\partial q}(\gamma(t),\gamma'(t))$ et $B(t)=\frac{\partial L}{\partial v}(\gamma(t),\gamma'(t))$, vus comme vecteurs de $V$ ; ainsi $H(t)=\langle B(t),\gamma'(t)\rangle-L(\gamma(t),\gamma'(t))$.

*Premier terme.* Par (E.L), $B$ est dérivable sur $[0;1]$ et $B'=A$. Comme $\gamma$ est $C^2$, $\gamma'$ est dérivable de dérivée $\gamma''$. Le produit scalaire étant bilinéaire continu sur $V\times V$, la formule de Leibniz ([[ch05-formule-leibniz]]) montre que $t\mapsto\langle B(t),\gamma'(t)\rangle$ est dérivable et
$$
\frac{d}{dt}\langle B(t),\gamma'(t)\rangle=\langle B'(t),\gamma'(t)\rangle+\langle B(t),\gamma''(t)\rangle=\langle A(t),\gamma'(t)\rangle+\langle B(t),\gamma''(t)\rangle .
$$
*Second terme.* L'application $(q,v)\mapsto L(q,v)$ est de classe $C^1$ sur $V\times V$ et $t\mapsto(\gamma(t),\gamma'(t))$ est dérivable, de dérivée $(\gamma'(t),\gamma''(t))$, puisque $\gamma$ est $C^2$. Par la règle de la chaîne ([[ch05-composition-differentielles]]) et la formule (V.3.3) des différentielles partielles ([[ch05-differentielles-partielles]]),
$$
\frac{d}{dt}L\big(\gamma(t),\gamma'(t)\big)=dL_{(\gamma(t),\gamma'(t))}\big(\gamma'(t),\gamma''(t)\big)=\frac{\partial L}{\partial q}\big(\gamma(t),\gamma'(t)\big)\cdot\gamma'(t)+\frac{\partial L}{\partial v}\big(\gamma(t),\gamma'(t)\big)\cdot\gamma''(t)=\langle A(t),\gamma'(t)\rangle+\langle B(t),\gamma''(t)\rangle .
$$
*Conclusion.* En soustrayant, $H$ est dérivable sur $[0;1]$ et
$$
H'(t)=\langle A(t),\gamma'(t)\rangle+\langle B(t),\gamma''(t)\rangle-\langle A(t),\gamma'(t)\rangle-\langle B(t),\gamma''(t)\rangle=0 .
$$
Une fonction de dérivée nulle sur l'intervalle (connexe) $]0;1[$ y est constante ([[ch05-differentielle-nulle-constante]]) ; $H$ étant continue sur $[0;1]$, elle est constante sur $[0;1]$. $\square$

*Complément.* Si $L$ dépend de $u$, le même calcul (avec le terme supplémentaire $\frac{\partial L}{\partial u}$ dans la règle de la chaîne) donne $H'(t)=-\frac{\partial L}{\partial u}\big(t,\gamma(t),\gamma'(t)\big)$.

## Preuve à trous

Notons $A=\frac{\partial L}{\partial q}(\gamma,\gamma')$, $B=\frac{\partial L}{\partial v}(\gamma,\gamma')$, de sorte que $H=\langle B,\gamma'\rangle-L(\gamma,\gamma')$. Par (E.L), <trou indice="que dit exactement l'équation d'Euler-Lagrange ?">$B$ est dérivable et $B'=A$</trou>. La formule de Leibniz donne alors $\frac{d}{dt}\langle B,\gamma'\rangle=$ <trou>$\langle A,\gamma'\rangle+\langle B,\gamma''\rangle$</trou>, ce qui utilise que $\gamma$ est $C^2$.

Par la règle de la chaîne appliquée à $t\mapsto L(\gamma(t),\gamma'(t))$, et parce que <trou indice="quelle hypothèse supprime un terme ?">$L$ ne dépend pas de $u$ (pas de terme $\frac{\partial L}{\partial u}$)</trou>, on obtient $\frac{d}{dt}L(\gamma,\gamma')=$ <trou>$\frac{\partial L}{\partial q}(\gamma,\gamma')\cdot\gamma'+\frac{\partial L}{\partial v}(\gamma,\gamma')\cdot\gamma''=\langle A,\gamma'\rangle+\langle B,\gamma''\rangle$</trou>.

Donc $H'=0$ sur $[0;1]$, et $H$ est constante. $\square$

## Exemples

* **Énergie mécanique.** $L(q,v)=\frac12\norm v_V^2-U(q)$. On a $\frac{\partial L}{\partial v}(q,v)\cdot w=\langle v,w\rangle$, donc $\frac{\partial L}{\partial v}(q,v)\cdot v=\norm v_V^2$ et $H=\norm{\gamma'}^2-\frac12\norm{\gamma'}^2+U(\gamma)=\frac12\norm{\gamma'(t)}_V^2+U(\gamma(t))$. Vérification directe avec l'équation de Newton $\gamma''=-\nabla U(\gamma)$ ([[ch08-equation-newton]]) : $H'=\langle\gamma',\gamma''\rangle+\langle\nabla U(\gamma),\gamma'\rangle=0$.
* **Pendule.** $V=\R$, $L(q,v)=\frac12v^2+\cos q$ (potentiel $U=-\cos q$) ; (E.L) : $\gamma''=-\sin\gamma$. L'énergie $H=\frac12\gamma'^2-\cos\gamma$ est constante (la preuve vaut sur tout intervalle où $\gamma$ est solution). Si $\gamma(0)=0$, $\gamma'(0)=v_0$ avec $0<v_0<2$, alors $H\equiv\frac12v_0^2-1$, et en un instant où le pendule s'arrête ($\gamma'=0$), son angle $\theta$ vérifie $\cos\theta=1-\frac{v_0^2}2$ : l'amplitude se lit sans résoudre l'équation.
* **Plus court graphe.** $V=\R$, $L(q,v)=\sqrt{1+v^2}$ (longueur du graphe). Alors $\frac{\partial L}{\partial v}=\frac{v}{\sqrt{1+v^2}}$ et $H=\frac{v^2}{\sqrt{1+v^2}}-\sqrt{1+v^2}=-\frac1{\sqrt{1+v^2}}$ évalué en $v=\gamma'(t)$. $H$ constante force $|\gamma'|$ constante, donc $\gamma'$ (continue, de valeur absolue constante) constante par le théorème des valeurs intermédiaires : les solutions $C^2$ de (E.L) sont les fonctions affines, et le graphe le plus court est un segment.

## Pièges

* > ⚠️ $H$ n'est pas « $\frac{\partial L}{\partial v}-L$ » : c'est la forme linéaire $\frac{\partial L}{\partial v}(\gamma,\gamma')$ **appliquée au vecteur** $\gamma'(t)$, moins $L$. Dans $V=\R$ : $H=\gamma'\,\frac{\partial L}{\partial v}(\gamma,\gamma')-L(\gamma,\gamma')$.
* > ⚠️ Pour $L=T-U$, l'énergie conservée est $T+U$, pas $T-U$ : le signe de $U$ change.
* L'hypothèse « $L$ ne dépend pas de $u$ » est indispensable (H1) ; elle porte sur la variable de temps de $L$, pas sur la courbe.
* La conservation de $H$ est une condition **nécessaire** : une courbe à $H$ constante n'est pas forcément solution de (E.L) (par exemple, pour $L=\frac12v^2$ dans $\R^2$, toute courbe parcourue à vitesse de norme constante, comme un cercle, a $H$ constante, alors que seules les droites à vitesse constante sont solutions).
* Le « $\cdot$ » est la dualité entre $L(V;\R)$ et $V$, identifiée au produit scalaire ; il ne dépend pas du choix du produit scalaire.
